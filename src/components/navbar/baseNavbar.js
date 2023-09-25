'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './baseNavBar.module.scss'
import HamburgerButton from './hamburgerButton/hamburgerButton'
import { useEffect } from 'react'
import useDeviceStore from '@/store/device.store'
import { breakpoints } from '@/app/config/devices.config'

function BaseNavbar() {
  const { isMobile, setIsMobile, setInnerWidth, setInnerHeight } =
    useDeviceStore()
  const currentPathname = usePathname()

  useEffect(() => {
    window.addEventListener('load', () => {})

    window.addEventListener(
      'resize',
      () => {
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)
        setIsMobile(window.innerWidth <= breakpoints.laptop)
      },
      false,
    )
  }, [])

  return (
    <nav className={styles.navbar}>
      {isMobile ? (
        <HamburgerButton />
      ) : (
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
      )}
    </nav>
  )
}

export default BaseNavbar
