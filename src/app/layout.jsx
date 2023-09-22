'use client'

import { Analytics } from '@vercel/analytics/react'
import FullPageMenu from '@/components/menu/fullPageMenu'
import useDeviceStore from '@/store/device.store'
import { Lexend } from 'next/font/google'
import './globals.scss'

import BaseHeader from '@/components/headers/BaseHeader'
import styles from './layout.module.scss'
import Footer from '@/components/footer/Footer'
import { useEffect } from 'react'

const lexend = Lexend({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const { showMobileMenu, isMobile, setShowMobileMenu } = useDeviceStore()

  useEffect(() => {
    if (isMobile) {
      setShowMobileMenu(false)
    }
  }, [])

  return (
    <html lang="en">
      <body className={lexend.className}>
        <div className={styles.bodyWrapper}>
          <BaseHeader />
          <div className={styles.bodyContentNoMargin}>
            {showMobileMenu && isMobile ? <FullPageMenu /> : children}
          </div>
        </div>
        {showMobileMenu && isMobile ? <FullPageMenu /> : <Footer />}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
