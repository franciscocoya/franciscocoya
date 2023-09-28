'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './baseNavBar.module.scss'
import { useTranslations } from 'next-intl'

function BaseNavbar() {
  const currentPathname = usePathname()
  const t = useTranslations('Header')

  return (
    <nav className={styles.navbar} aria-labelledby="mainmenulabel">
      <ul>
        {currentPathname !== '/' && (
          <li>
            <Link href="/" aria-current="page" tabIndex={1}>
              {t('home')}
            </Link>
          </li>
        )}

        <li>
          <Link href="/about" aria-current="page" tabIndex={2}>
            {t('about')}
          </Link>
        </li>
        <li>
          <Link href="/work" aria-current="page" tabIndex={3}>
            {t('work')}
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-current="page" tabIndex={4}>
            {t('contact')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default BaseNavbar
