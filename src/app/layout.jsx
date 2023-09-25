// 'use client'

import { Analytics } from '@vercel/analytics/react'
import { Lexend } from 'next/font/google'
import './globals.scss'

import BaseHeader from '@/components/headers/BaseHeader'
import styles from './layout.module.scss'
import Footer from '@/components/footer/Footer'

const lexend = Lexend({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
