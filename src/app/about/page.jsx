import styles from './page.module.scss'
import SecondaryLayout from '@/layouts/SecondaryLayout'
import { getJsonLd } from './microdata'
import CvSection from './cvSection'

export const metadata = {
  title: 'About me 🔗| Francisco Coya',
  description: 'About me',
  keywords: 'about, cv, resume, skills, experience, studies',
  robots: 'index,follow',
  canonical: 'https://franciscocoya.dev/about',
  image: '/assets/images/opengraph.jpg',
  openGraph: {
    title: 'About | Francisco Coya',
    description: 'About me',
    url: 'https://franciscocoya.dev/about',
    site_name: 'Francisco Coya',
    images: [
      {
        url: '/assets/images/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'About',
      },
    ],

    type: 'article',
  },
}

function AboutPage() {
  const jsonLd = getJsonLd()

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
          <CvSection />
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </SecondaryLayout>
  )
}

export default AboutPage
