'use client'

import BaseCardWithImage from '@/components/cards/baseCardWithImage/baseCardWithImage'
import { useMemo, useState } from 'react'
import styles from './page.module.scss'
import { formatCvExperienceDates } from '@/lib/textFormatter'
import SecondaryLayout from '@/layouts/SecondaryLayout'

import { getCv } from '@/lib/cvData'

function AboutPage() {
  const [cvData, setCvData] = useState(null)

  const getCvData = () => {
    setCvData(getCv())
  }

  useMemo(async () => {
    getCvData()
  }, [])

  return (
    <SecondaryLayout>
      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>
        <div className={styles.aboutWrapper}>
          <div className={styles.resumeContainer}>
            <p>
              Francisco Coya is a Software Engineering student at University Of
              Oviedo (Oviedo, Spain). He has always interested in software
              development, specially in how TI companies and firms create their
              products.
            </p>
            <p>
              Francisco really likes Front-End development ! Discover new JS
              frameworks and try to learn technologies which using in the
              industry now. In particular, he considers himself a React
              enthusiast, focusing on create user-friendly interfaces. Also,
              from his back-end knowledge he would highlight the creation of
              API&apos;s, design patterns and a basic knowledge of CI/CD, among
              others.
            </p>
            <p>
              On his spare time, he loves to take photographs, playing his
              acoustic guitar (Music is part of his life). Creativity needs to
              be constantly renewed ! All of that helps him to improve in UI
              design and design thinking as well.
            </p>
          </div>

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
      </main>
    </SecondaryLayout>
  )
}

export default AboutPage
