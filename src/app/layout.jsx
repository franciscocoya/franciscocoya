'use client'

import FullPageMenu from '@/components/menu/fullPageMenu'
import useDeviceStore from '@/store/device.store'
import { Lexend } from 'next/font/google'
import './globals.scss'

import BaseHeader from '@/components/headers/BaseHeader'
import Head from 'next/head'
import styles from './layout.module.scss'
import Footer from '@/components/footer/Footer'
import { useEffect } from 'react'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'Francisco Coya Abajo | Software Engineering Student',
  description: 'Web Apllications Developer and Software Engineer Student',
  // TODO: Open Graph
}

export default function RootLayout({ children }) {
  const { showMobileMenu, isMobile, setShowMobileMenu } = useDeviceStore()

  useEffect(() => {
    if (isMobile) {
      setShowMobileMenu(false)
    }
  }, [])

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={lexend.className}>
        <div className={styles.bodyWrapper}>
          <BaseHeader />
          <div className={styles.bodyContentNoMargin}>
            {showMobileMenu && isMobile ? <FullPageMenu /> : children}
          </div>
        </div>
        {showMobileMenu && isMobile ? <FullPageMenu /> : <Footer />}
      </body>
    </html>
  )
}