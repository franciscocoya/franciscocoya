'use client'

import BaseNavbar from '@/components/navbar/baseNavbar'
import styles from './baseHeader.module.scss'
import FullPageMenu from '../menu/fullPageMenu'
import useDeviceStore from '@/store/device.store'

function BaseHeader() {
  const { showMobileMenu } = useDeviceStore()
  return (
    <>
      {showMobileMenu && <FullPageMenu />}

      <header className={styles.header}>
        <BaseNavbar />
      </header>
    </>
  )
}

export default BaseHeader
