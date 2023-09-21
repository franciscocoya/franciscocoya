'use client'
import { NextSeo } from 'next-seo'
import BaseButton from '@/components/buttons/baseButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import Link from 'next/link'
import BaseLayout from '@/layouts/BaseLayout'

function Home() {
  const router = useRouter()

  return (
    <BaseLayout>
      <NextSeo
        title="Francisco Coya 👨‍💻 Software Engineering Student"
        description="Software Engineering Student and Web Applications Developer based in Oviedo, Spain"
        canonical="https://franciscocoya/"
        openGraph={{
          url: 'https://franciscocoya/',
          title: 'Francisco Coya 👨‍💻 Software Engineering Student',
          description:
            'Software Engineering Student and Web Applications Developer based in 📍 Oviedo, Spain',
          images: [
            {
              url: '/assets/images/opengraph.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: '/assets/images/opengraph.jpg',
              width: 1200,
              height: 630,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

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
          <p>Based in Oviedo, Spain</p>
          <div className={styles.socialNetworkContainer}>
            <Link
              href="https://www.linkedin.com/in/franciscocoya/"
              target="_blank"
            >
              <SiLinkedin size={32} />
            </Link>

            <Link href="https://github.com/franciscocoya" target="_blank">
              <SiGithub size={32} />
            </Link>
          </div>
          <BaseButton text="View more" onClick={() => router.push('/about')} type="white"/>
        </div>
      </main>
    </BaseLayout>
  )
}

export default Home
