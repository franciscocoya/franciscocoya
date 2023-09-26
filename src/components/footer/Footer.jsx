import styles from './footer.module.scss'
import { useTranslations } from 'next-intl'

function Footer() {
  const t = useTranslations('Footer')
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} {t('content')}
      </p>
    </footer>
  )
}

export default Footer
