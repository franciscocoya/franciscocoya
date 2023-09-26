import { notFound } from 'next/navigation'

import { Analytics } from '@vercel/analytics/react'
import { Lexend } from 'next/font/google'
import './globals.scss'

import BaseHeader from '@/components/headers/BaseHeader'
import styles from './layout.module.scss'
import Footer from '@/components/footer/Footer'

const locales = ['en', 'es']

const lexend = Lexend({ subsets: ['latin'] })

export default function RootLayout({ children, params: { locale } }) {
  
  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  return (
    <html lang={locale}>
      <body className={lexend.className}>
        <div className={styles.bodyWrapper}>
          <BaseHeader />
          <div className={styles.bodyContentNoMargin}>{children}</div>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
