'use client'

import BaseCardWithImage from '@/components/cards/baseCardWithImage/baseCardWithImage'
import { formatCvExperienceDates } from '@/lib/textFormatter'
import { useMemo, useState } from 'react'
import { getCv } from '@/lib/cvData'

import styles from './page.module.scss'

function CvSection() {
  const [cvData, setCvData] = useState(null)

  const getCvData = () => {
    setCvData(getCv())
  }

  useMemo(async () => {
    getCvData()
  }, [])

  return (
    <div className="cv-section">
      <section>
        <h2>Studies</h2>
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
                  study.dateStart,
                  study.dateEnd,
                  study.status,
                )}
              />
            )
          })}
        </div>
      </section>

      <section>
        <h2>Experience</h2>
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
                  job.dateStart,
                  job.dateEnd,
                  job.status,
                )}
              />
            )
          })}
        </div>
      </section>

      <section>
        <h2>Certifications</h2>
        <div className={styles.cardSection}>
          {cvData?.certifications.map((certification) => {
            return (
              <BaseCardWithImage
                key={certification.id}
                cardImage={`/assets/images/logos/${certification.logo_name}_logo.png`}
                cardImageAlt={`Logo de ${certification.organization}`}
                cardTitle={certification.denomination}
                cardText={certification.credentialId}
                isTextLink={true}
                textContentLink="See credential"
                cardExtraInformation={certification.issued}
              />
            )
          })}
        </div>
      </section>

      <section>
        <h2>Skills</h2>
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
