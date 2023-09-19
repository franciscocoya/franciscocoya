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
      </body>
    </html>
  )
}

export const metadata = {
  openGraph: {
    title: 'Francisco Coya',
    description: 'Web Aplication Developer and Software Engineering Student',
    url: 'https://nextjs.org',
    siteName:
      'Francisco Coya | Software Engineering Student | Web Applications Developer',
    images: [
      {
        url: '/assets/images/opengraph.jpg',
        width: 800,
        height: 600,
      },
      {
        url: '/assets/images/opengraph.jpg',
        width: 1800,
        height: 1600,
        alt: 'Francisco Coya | Software Engineering Student | Web Applications Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
    author: 'Francisco Coya',
    themeColor: '#000',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
    category: 'Software Engineering',
  },
}
