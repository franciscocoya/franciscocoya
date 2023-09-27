import { RxMoon, RxSun } from 'react-icons/rx'

import styles from './themeSwitcher.module.scss'
import { useEffect } from 'react'
import { useThemeDetector } from '@/app/hooks/useThemeDetector'

function ThemeSwitcher() {
  const { darkMode } = useThemeDetector()

  return (
    <div className={styles.themeSwitcher}>
      {darkMode ? <RxSun size={24} /> : <RxMoon size={24} />}
    </div>
  )
}

export default ThemeSwitcher
