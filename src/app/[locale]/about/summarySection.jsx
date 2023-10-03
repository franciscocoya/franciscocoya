'use client'

import styles from './page.module.scss'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

function AboutSummarySection() {
  const t = useTranslations('About')

  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
      className={styles.resumeContainer}
    >
      <p>{t('description.p1')}</p>
      <p>{t('description.p2')}</p>
      <p>{t('description.p3')}</p>
    </motion.div>
  )
}

export default AboutSummarySection
