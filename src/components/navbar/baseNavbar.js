'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './baseNavBar.module.scss'

function BaseNavbar() {
  const currentPathname = usePathname()

  return (
    <nav className={styles.navbar}>
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
  )
}

export default BaseNavbar
