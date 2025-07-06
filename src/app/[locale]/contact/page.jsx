import SecondaryLayout from '@/layouts/SecondaryLayout'
import styles from './page.module.scss'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdAlternateEmail } from 'react-icons/md'
import { getJsonLd } from './microdata'

import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'Contact | Francisco Coya',
  description: 'You can contact with Francisco Coya here 📧',
  canonical: 'https://franciscocoya.dev/contact',
  robots: 'index,follow',
  openGraph: {
    title: 'Contact with me ! 👨‍💻',
    description: 'You can contact Francisco Coya here 📧',
    url: 'https://franciscocoya.dev/contact',
    site_name: 'Francisco Coya',
    images: [
      {
        url: '/assets/images/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact',
      },
    ],

    type: 'article',
  },
}

function ContactPage() {
  const t = useTranslations('Contact')
  const jsonLd = getJsonLd()
  return (
    <SecondaryLayout>
      <main className={styles.main}>
        <h1>{t('title')}</h1>
        <ul>
          <li>
            <MdAlternateEmail size={32} />
            <a href="mailto:info@franciscocoya.dev" target="_blank">
              info@franciscocoya.dev
            </a>
          </li>
          <li>
            <FaLinkedin size={32} />
            <a
              href="https://www.linkedin.com/in/franciscocoya/"
              target="_blank"
            >
              franciscocoya
            </a>
          </li>
          <li>
            <FaGithub size={32} />
            <a href="https://www.github.com/franciscocoya/" target="_blank">
              franciscocoya
            </a>
          </li>
          <li>
            <HiOutlineLocationMarker size={32} color="#fb2576" />
            <p>{t('location')}</p>
          </li>
        </ul>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </SecondaryLayout>
  )
}

export default ContactPage
