import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { Analytics } from '@vercel/analytics/react'
import { Lexend } from 'next/font/google'
import './globals.scss'

import BaseHeader from '@/components/headers/BaseHeader'
import styles from './layout.module.scss'
import Footer from '@/components/footer/Footer'
import LangSwitch from '@/components/switches/lang_switcher/LangSwitcher'

const locales = ['en', 'es']

const lexend = Lexend({ subsets: ['latin'] })

export default async function RootLayout({ children, params: { locale } }) {
  const isValidLocale = locales?.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  let messages
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={lexend.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className={styles.bodyWrapper}>
            <BaseHeader />
              <div className={styles.bodyContentNoMargin}>{children}</div>
          </div>
          <Footer />
          <LangSwitch />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
