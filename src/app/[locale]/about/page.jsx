import SecondaryLayout from '@/layouts/SecondaryLayout'
import CvSection from './cvSection'
import { getJsonLd } from './microdata'
import styles from './page.module.scss'
import AboutSummarySection from './summarySection'

import { useTranslations } from 'next-intl'

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

  const t = useTranslations('About')

  return (
    <SecondaryLayout>
      <main className={styles.main}>
        <h1 className={styles.title}>{t('title')}</h1>
        <div className={styles.aboutWrapper}>
          <AboutSummarySection />
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
