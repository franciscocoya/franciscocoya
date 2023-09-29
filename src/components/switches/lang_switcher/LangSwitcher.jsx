'use client'

import styles from './langSwitch.module.scss'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
import { useEffect, useState, useTransition } from 'react'

function LangSwitch() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [, startTransition] = useTransition()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('LanguageSwitcher')

  const handleChangeLanguage = (selectedLocale) => {
    startTransition(() => {
      sessionStorage.setItem('lang', selectedLocale)
      router.replace(pathname, { locale: selectedLocale })
    })
  }

  const handleShowTooltip = (show) => {
    setShowTooltip(show)
  }

  useEffect(() => {
    // Prevents the selected language from being reset when the page is refreshed
    const refreshLang = () => {
      const lang = sessionStorage.getItem('lang')
      if (lang && lang !== locale) {
        handleChangeLanguage(lang)
      }
    }

    refreshLang()
  }, [])

  return (
    <>
      {showTooltip && (
        <div className={styles.langSwitchPopup}>
          {t('lang')} · <span>{t('country')}</span>
        </div>
      )}
      <div className={styles.langSwitch}>
        <div
          className={`${styles.langSwitchSelector} ${
            locale === 'en' && styles.langSwitchSelectorSelected
          }`}
          onClick={() => handleChangeLanguage('en')}
          onMouseEnter={() => handleShowTooltip(locale === 'en')}
          onMouseLeave={() => handleShowTooltip(false)}
          role="button"
          tabindex="0"
        >
          EN
        </div>
        <div
          className={`${styles.langSwitchSelector} ${
            locale === 'es' && styles.langSwitchSelectorSelected
          }`}
          onClick={() => handleChangeLanguage('es')}
          onMouseEnter={() => handleShowTooltip(locale === 'es')}
          onMouseLeave={() => handleShowTooltip(false)}
          role="button"
          tabindex="0"
        >
          ES
        </div>
      </div>
    </>
  )
}

export default LangSwitch
