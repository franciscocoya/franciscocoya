'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './baseNavBar.module.scss'
import { useTranslations } from 'next-intl'
import ThemeSwitcher from '@/components/switches/lang_switcher/theme_switcher/ThemeSwitcher'

function BaseNavbar() {
  const currentPathname = usePathname()
  const t = useTranslations('Header')

  return (
    <nav className={styles.navbar}>
      <ul>
        {currentPathname !== '/' && (
          <li>
            <Link href="/">{t('home')}</Link>
          </li>
        )}

        <li>
          <Link href="/about">{t('about')}</Link>
        </li>
        <li>
          <Link href="/work">{t('work')}</Link>
        </li>
        <li>
          <Link href="/contact">{t('contact')}</Link>
        </li>
      </ul>
      {/* <ThemeSwitcher /> */}
    </nav>
  )
}

export default BaseNavbar
