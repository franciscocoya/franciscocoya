// 'use client'
// import { NextSeo } from 'next-seo'
import IconButton from '@/components/buttons/iconButton'
import BaseButton from '@/components/buttons/baseButton'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'
import styles from './page.module.scss'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import BaseLayout from '@/layouts/BaseLayout'
import Link from 'next/link'

export const metadata = {
  title: 'Francisco Coya 👨‍💻 Software Engineering Student',
  description:
    'Software Engineering Student and Web Applications Developer based in Oviedo, Spain',
  canonical: 'https://franciscocoya/',
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
  // const router = useRouter()

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
          <div className={styles.socialNetworkContainer}>
            <Link
              href="https://www.linkedin.com/in/franciscocoya/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <SiLinkedin size={32} color="#f4f4f4" />
            </Link>

            <Link
              href="https://github.com/franciscocoya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <SiGithub size={32} color="#f4f4f4" />
            </Link>
          </div>
          <Link href="/about">
            <BaseButton text="View more" type="white" />
          </Link>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </BaseLayout>
  )
}
