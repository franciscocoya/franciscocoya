'use client'

import { useEffect, useState } from 'react'

export const useThemeDetector = () => {
  const [darkMode, setDarkMode] = useState(false)

  const modeMe = (e) => {
    setDarkMode(!!e.matches)
  }

  const changeTheme = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')

    setDarkMode(matchMedia.matches)
    matchMedia.addEventListener('change', modeMe)

    return () => matchMedia.removeEventListener('change', modeMe)
  }, [])

  return darkMode
}
