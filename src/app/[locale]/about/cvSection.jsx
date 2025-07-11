'use client'

import BaseCardWithImage from '@/components/cards/baseCardWithImage/baseCardWithImage'
import { formatCvExperienceDates } from '@/lib/textFormatter'
import { useMemo, useState } from 'react'
import { getCv } from '@/lib/cvData'

import { useTranslations, useLocale } from 'next-intl'
import styles from './page.module.scss'

function CvSection() {
  const [cvData, setCvData] = useState(null)
  const locale = useLocale()
  const t = useTranslations('About')

  const getCvData = () => {
    setCvData(getCv(locale))
  }

  useMemo(async () => {
    getCvData()
  }, [])

  return (
    <div className={styles.cvSection}>
      <section>
        <h2>{t('studies.title')}</h2>
        <div className={styles.cardSection}>
          {cvData?.studies.map((study) => {
            return (
              <BaseCardWithImage
                key={study.id}
                cardImage={`/assets/images/logos/${study.logo_name}_logo.${study.logo_extension}`}
                cardImageAlt={`${study.organization} logo`}
                cardTitle={study.denomination}
                cardText={study.organization}
                cardExtraInformation={formatCvExperienceDates(
                  study?.dateStart || '',
                  study?.dateEnd || '',
                  study?.status || '',
                )}
              />
            )
          })}
        </div>
      </section>

      <section>
        <h2>{t('experience.title')}</h2>
        <div className={styles.cardSection}>
          {cvData?.experience.map((job) => {
            return (
              <BaseCardWithImage
                key={job.id}
                cardImage={`/assets/images/logos/${job.shortname}_logo.png`}
                cardImageAlt={`${job.organization} logo`}
                cardTitle={job.denomination}
                cardText={job.organization}
                cardExtraInformation={formatCvExperienceDates(
                  job?.dateStart,
                  job?.dateEnd,
                  job?.status,
                )}
              />
            )
          })}
        </div>
      </section>

      <section>
        <h2>{t('certifications.title')}</h2>
        <div className={styles.cardSection}>
          {cvData?.certifications.map((certification) => {
            return (
              <BaseCardWithImage
                key={certification.id}
                cardImage={`/assets/images/logos/${certification.logo_name}_logo.png`}
                cardImageAlt={t(`alt.${certification.logo_name}`)}
                cardTitle={certification.denomination}
                cardText={certification.credentialId}
                isTextLink={true}
                textContentLink={t('certifications.see_credential')}
                cardExtraInformation={certification.issued}
              />
            )
          })}
        </div>
      </section>

      <section>
        <h2>{t('skills.title')}</h2>
        <div className={styles.skillSection}>
          {cvData?.skills.map((skill) => {
            return <p key={skill.id}>{skill.denomination}</p>
          })}
        </div>
      </section>
    </div>
  )
}

export default CvSection
