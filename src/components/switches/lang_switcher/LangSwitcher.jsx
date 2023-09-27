'use client'

import styles from './langSwitch.module.scss'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
import { useState, useTransition } from 'react'
import { useTranslations } from 'next-intl'


function LangSwitch() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [, startTransition] = useTransition()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('LanguageSwitcher')

  const handleChangeLanguage = (selectedLocale) => {
    startTransition(() => {
      router.replace(pathname, { locale: selectedLocale })
    })
  }

  const handleShowTooltip = (show) => {
    setShowTooltip(show)
  }

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
        >
          ES
        </div>
      </div>
    </>
  )
}

export default LangSwitch
