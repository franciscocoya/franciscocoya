import Image from 'next/image'
import styles from './page.module.scss'
import BaseLayout from '@/layouts/BaseLayout'
import BaseSocialNetworkIcons from '@/components/socialnetworks/baseSocialNetworkIcons'
import BaseButton from '@/components/buttons/baseButton'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'Francisco Coya 👨‍💻 Software Engineering Student',
  description:
    'Software Engineering Student and Web Applications Developer based in Oviedo, Spain',
  canonical: 'https://franciscocoya/',
  robots: 'index,follow',
  openGraph: {
    title: 'Francisco Coya 👨‍💻 Software Engineering Student',
    description:
      'Software Engineering Student and Web Applications Developer based in Oviedo, Spain',
    url: 'https://franciscocoya/',
    site_name: 'Francisco Coya',
    images: [
      {
        url: '/assets/images/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Francisco Coya',
      },
    ],

    type: 'website',
  },
}

export default function Home() {
  const t = useTranslations('Home')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Francisco Coya',
    url: 'https://franciscocoya/',
    image: '/assets/images/fc_profile_image_bg_b&w.png',
    sameAs: ['https://www.linkedin.com/in/franciscocoya/'],
    jobTitle: 'Software Engineering Student',
    worksFor: {
      '@type': 'Organization',
      name: 'Universidad de Oviedo',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidad de Oviedo',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Oviedo',
      addressRegion: 'Asturias',
      addressCountry: 'Spain',
    },
  }

  return (
    <BaseLayout>
      <main className={styles.main}>
        <div id={styles.profileImageWrapper}>
          <Image
            src="/assets/images/fc_profile_image_bg_b&w.png"
            alt={t('profile_image_alt')}
            width={736}
            height={736}
          />
        </div>

        <div className={styles.homeContent}>
          <h1>
            <span>Francisco</span>
            <br />
            Coya
          </h1>
          <h2>{t('subtitle1')}</h2>
          <span role="heading" aria-level="3">
            {t('subtitle2')}
          </span>
          <h3>{t('location')}</h3>

          <BaseSocialNetworkIcons />

          <div className={styles.shorcutsButtonGroup}>
            <Link href="/about">
              <BaseButton text={t('about_button')} type="white" />
            </Link>
            <Link href="/contact">
              <BaseButton
                text={t('lets_talk_button')}
                type="primary_outlined"
              />
            </Link>
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </BaseLayout>
  )
}
