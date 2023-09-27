'use client'

import styles from './langSwitch.module.scss'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'

import { useTransition } from 'react'

function LangSwitch() {
  const [,startTransition] = useTransition()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleChangeLanguage = (selectedLocale) => {
    startTransition(() => {
      router.replace(pathname, { locale: selectedLocale })
    })
  }

  return (
    <div className={styles.langSwitch}>
      <div
        className={`${styles.langSwitchSelector} ${
          locale === 'en' && styles.langSwitchSelectorSelected
        }`}
        onClick={() => handleChangeLanguage('en')}
      >
        EN
      </div>
      <div
        className={`${styles.langSwitchSelector} ${
          locale === 'es' && styles.langSwitchSelectorSelected
        }`}
        onClick={() => handleChangeLanguage('es')}
      >
        ES
      </div>
    </div>
  )
}

export default LangSwitch
