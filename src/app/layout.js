'use client'

import FullPageMenu from '@/components/menu/fullPageMenu'
import useDeviceStore from '@/store/device.store'
import { Lexend } from 'next/font/google'
import './globals.scss'
import BaseNavbar from '@/components/navbar/baseNavbar'

import styles from './layout.module.scss'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'Francisco Coya Abajo | Software Engineering Student',
  description: 'Web Apllications Developer and Software Engineer Student',
  // TODO: Open Graph
}

export default function RootLayout({ children }) {
  const { showMobileMenu, isMobile } = useDeviceStore()
  return (
    <html lang="en">
      <body className={`${lexend.className}`}>
        <div className={styles.bodyWrapper}>
          <header className={styles.header}>
            <BaseNavbar />
          </header>
          <div className={styles.bodyContent}>
            {showMobileMenu && isMobile ? <FullPageMenu /> : children}
          </div>
        </div>
      </body>
    </html>
  )
}
