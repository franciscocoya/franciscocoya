'use client'

import BaseNavbar from '@/components/navbar/baseNavbar'
import styles from './baseHeader.module.scss'
import FullPageMenu from '@/components/menu/fullPageMenu'
import useDeviceStore from '@/store/device.store'
import HamburgerButton from '@/components/navbar/hamburgerButton/hamburgerButton'
import { useDeviceDetector } from '@/app/hooks/useDeviceDetector'

function BaseHeader() {
  const { getIsMenuOpen } = useDeviceStore()
  const { isMobile } = useDeviceDetector()

  return (
    <>
      {getIsMenuOpen() && <FullPageMenu />}

      {isMobile ? (
        <HamburgerButton />
      ) : (
        <header className={styles.header}>
          <BaseNavbar />
        </header>
      )}
    </>
  )
}

export default BaseHeader
