'use client'

import BaseButton from '@/components/buttons/baseButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import Link from 'next/link'
import BaseLayout from '@/layouts/BaseLayout'
import Head from 'next/head'
import useDeviceStore from '@/store/device.store'

function Home() {
  const router = useRouter()

  return (
    <BaseLayout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>
          Francisco Coya | Software Engineering Student | Web Applications
          Developer
        </title>
        <meta
          name="description"
          content="Francisco Coya | Software Engineering Student | Web Applications Developer"
        />

        <meta
          property="og:title"
          content="Francisco Coya | Software Engineering Student | Web Applications Developer"
        />
        <meta
          property="og:description"
          content="Francisco Coya a Software Engineering Student and Web Applications Developer."
        />
        <meta
          property="og:image"
          content="https://franciscocoya.es/assets/images/fc_profile_image_bg_b&w.png"
        />
        <meta property="og:url" content="https://franciscocoya.es" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Francisco Coya" />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <main className={styles.main}>
        <div id={styles.profileImageWrapper}>
          <Image
            src="/assets/images/fc_profile_image_bg_b&w.png"
            alt="Francisco Coya"
            width={736}
            height={765}
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
          <BaseButton text="View more" onClick={() => router.push('/about')} />
        </div>
      </main>
    </BaseLayout>
  )
}

export default Home
