import { useEffect, useState } from 'react'

export const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme())

  const getCurrentTheme = () =>
    window !== undefined
      ? window?.matchMedia('(prefers-color-scheme: dark)').matches
      : false

  const mqListener = (e) => {
    setIsDarkTheme(e.matches)
  }

  useEffect(() => {
    const darkThemeMq =
      window !== undefined
        ? window?.matchMedia('(prefers-color-scheme: dark)').matches
        : false
    darkThemeMq.addListener(mqListener)
    return () => darkThemeMq.removeListener(mqListener)
  }, [])

  return isDarkTheme
}
