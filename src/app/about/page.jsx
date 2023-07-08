'use client'

import BaseCardWithImage from '@/components/cards/baseCardWithImage'
import { readJSON } from '@/lib/jsonReader'
import { useMemo, useState } from 'react'
import styles from './page.module.scss'
import { formatCvExperienceDates } from '@/lib/textFormatter'

function AboutPage() {
  const [cvData, setCvData] = useState(null)

  const getCvData = async () => {
    readJSON('../../../data/cv.json').then((data) => {
      setCvData(data)
      console.log(data)
    })
  }

  useMemo(() => {
    getCvData()
  }, [])

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.aboutWrapper}>
        <div className={styles.resumeContainer}>
          <p>
            Hi there 👋 I’m Francisco Coya, a Software Engineering student,
            currently in Oviedo, Spain.
          </p>
          <p>
            I’m studying a Bachelor of Software Engineering in the University of
            Oviedo (Spain). Since my beginnings in the world of software
            development I have been interested in how big TI companies and other
            firms made their websites.
          </p>
          <p>
            I really like Front-End development ! Discover new JS frameworks and
            try to learn technologies which using in the industry now. In
            particular, I’m consider myself a React enthusiast, focusing on
            create user-friendly interfaces. In addition, from my back-end
            knowledge I would highlight the creation of API's, design patterns
            and a basic knowledge of CI/CD, among others.
          </p>
          <p>
            I spend a lot of my spare time taking photographs and playing my
            acoustic guitar. Photography and graphic design inspires me to
            improve in UI design. The creative part needs to be constantly
            renewed, this is the reason why these two hobbies help me a lot.
          </p>
        </div>

        <section>
          <h2>Studies</h2>
          {/* Ingenieria informatica */}
          {/* ciclo superior */}
        </section>

        <section>
          <h2>Experience</h2>
          {cvData?.experience.map((job) => {
            return (
              <BaseCardWithImage
                key={job.id}
                cardImage={`/assets/images/logos/${job.shortname}_logo.png`}
                cardImageAlt={`Logo de ${job.organization}`}
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
        </section>

        <section>
          <h2>Certifications</h2>
          {cvData?.certifications.map((certification) => {
            return (
              <BaseCardWithImage
                key={certification.id}
                cardImage={`/assets/images/logos/${certification.logo_name}_logo.png`}
                cardImageAlt={`Logo de ${certification.organization}`}
                cardTitle={certification.denomination}
                cardText={certification.credentialId}
                isTextLink={true}
                cardExtraInformation={certification.issued}
              />
            )
          })}
        </section>

        <section>
          <h2>Skills</h2>
          {/* Languages */}
          {/* Frameworks */}
          {/* Tools */}
        </section>
      </div>
    </main>
  )
}

// export async function getStaticProps() {
//   const cvAsJSON = await readJSON('/data/studies.json')

//   return {
//     props: { cvAsJSON },
//   }
// }

export default AboutPage
