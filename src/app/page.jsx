'use client'

import BaseButton from '@/components/buttons/baseButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import Link from 'next/link'

function Home() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      <div id={styles.profileImageWrapper}>
        <Image
          src="/assets/images/fc_profile_image_bg_b&w.png"
          alt="Francisco Coya"
          width={600}
          height={600}
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
  )
}

export default Home
