'use client'
import { Analytics } from '@vercel/analytics/react'
import FullPageMenu from '@/components/menu/fullPageMenu'
import useDeviceStore from '@/store/device.store'
import { Lexend } from 'next/font/google'
import './globals.scss'

import BaseHeader from '@/components/headers/BaseHeader'
import styles from './layout.module.scss'
import Footer from '@/components/footer/Footer'

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
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>
          Francisco Coya 👨‍💻 Software Engineering Student, Web Applications
          Developer
        </title>
        <meta
          name="description"
          content="Software Engineering Student and Web Applications Developer"
        />

        <meta
          property="og:title"
          content="Francisco Coya | Software Engineering Student | Web Applications Developer"
        />
        <meta
          property="og:description"
          content="Francisco Coya a Software Engineering Student and Web Applications Developer."
        />
        <meta
          property="og:image"
          content="https://franciscocoya.es/assets/images/opengraph.jpg"
        />
        <meta property="og:url" content="https://franciscocoya.es" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Francisco Coya" />
        <meta property="og:locale" content="en_GB" />
        {/* <link rel="manifest" href="manifest.json" /> */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={lexend.className}>
        <div className={styles.bodyWrapper}>
          <BaseHeader />
          <div className={styles.bodyContentNoMargin}>
            {showMobileMenu && isMobile ? <FullPageMenu /> : children}
          </div>
        </div>
        {showMobileMenu && isMobile ? <FullPageMenu /> : <Footer />}
        <Analytics />
      </body>
    </html>
  )
}
