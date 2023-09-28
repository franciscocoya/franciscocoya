'use client'

import styles from './footer.module.scss'
import { useTranslations } from 'next-intl'
import { getRepoLatestReleaseVersion } from '@/lib/github'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function Footer() {
  const [version, setVersion] = useState('0.0.0')
  const t = useTranslations('Footer')

  useEffect(() => {
    getRepoLatestReleaseVersion('franciscocoya', 'franciscocoya').then(
      (version) => {
        setVersion(version)
      },
    )
  }, [])

  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} {t('content')}
      </p>
      <Link
        href={`https://github.com/franciscocoya/franciscocoya/releases/${version}`}
        target="_blank"
        className={styles.repoVersion}
        aria-label="GitHub repository version"
      >
        {version !== null && version}
      </Link>
    </footer>
  )
}

export default Footer
