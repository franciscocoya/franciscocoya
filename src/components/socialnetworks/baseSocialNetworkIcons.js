'use client'

import styles from './baseSocialNetworkIcons.module.scss'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import Link from 'next/link'
import { useThemeDetector } from '@/app/hooks/useThemeDetector'

function BaseSocialNetworkIcons() {
  const isDarkMode = useThemeDetector()

  return (
    <div className={styles.socialNetworkContainer}>
      <Link
        href="https://www.linkedin.com/in/franciscocoya/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <SiLinkedin size={32} color={isDarkMode ? '#f4f4f4' : '#121212'} />
      </Link>
      <span>{isDarkMode}</span>
      <Link
        href="https://github.com/franciscocoya"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
      >
        <SiGithub size={32} color={isDarkMode ? '#f4f4f4' : '#121212'} />
      </Link>
    </div>
  )
}

export default BaseSocialNetworkIcons
