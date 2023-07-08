'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './fullPageMenu.module.scss'
import useDeviceStore from '@/store/device.store'

function FullPageMenu() {
  const { setShowMobileMenu } = useDeviceStore()
  const currentPathname = usePathname()

  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false)
  }

  return (
    <div className={styles.fullPageMenuWrapper}>
      <div
        className={styles.menuCloseButton}
        onClick={handleCloseMobileMenu}
        role="button"
      >
        <span></span>
        <span></span>
      </div>
      <nav className={styles.fullPageMenuNav}>
        <ul>
          {currentPathname !== '/' && (
            <li>
              <Link href="/">Home</Link>
            </li>
          )}

          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default FullPageMenu
