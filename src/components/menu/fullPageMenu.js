'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './fullPageMenu.module.scss'
import useDeviceStore from '@/store/device.store'

function FullPageMenu() {
  const { setIsMenuOpen } = useDeviceStore()
  const currentPathname = usePathname()

  const handleCloseMobileMenu = () => {
    setIsMenuOpen(false)
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
              <Link href="/" onClick={handleCloseMobileMenu}>
                Home
              </Link>
            </li>
          )}

          <li>
            <Link href="/about" onClick={handleCloseMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/work" onClick={handleCloseMobileMenu}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleCloseMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default FullPageMenu
