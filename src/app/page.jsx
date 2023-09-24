import Image from 'next/image'
import styles from './page.module.scss'
import BaseLayout from '@/layouts/BaseLayout'
import BaseSocialNetworkIcons from '@/components/socialnetworks/baseSocialNetworkIcons'
import BaseButton from '@/components/buttons/baseButton'
import Link from 'next/link'

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
            alt="Francisco Coya"
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
          <h2>Software Engineering Student</h2>
          <span id="profile-role">Web Applications Developer</span>
          <h3>Based in Oviedo, Spain</h3>

          <BaseSocialNetworkIcons />

          <div className={styles.shorcutsButtonGroup}>
            <Link href="/about">
              <BaseButton text="More about" type="white" />
            </Link>
            <Link href="/contact">
              <BaseButton text="Let's talk" type="primary_outlined" />
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
