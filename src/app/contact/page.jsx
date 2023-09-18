import SecondaryLayout from '@/layouts/SecondaryLayout'
import styles from './page.module.scss'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdAlternateEmail } from 'react-icons/md'

function ContactPage() {
  return (
    <SecondaryLayout>
      <main className={styles.main}>
        <h1>Contact</h1>
        <ul>
          <li>
            <MdAlternateEmail size={32} />
            <a href="mailto:contact@franciscocoya.es" target="_blank">
              contact@franciscocoya.es
            </a>
          </li>
          <li>
            <MdAlternateEmail size={32} />
            <a href="mailto:franciscocoya@gmail.com" target="_blank">
              franciscocoya@gmail.com
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
            <a
              href="https://www.github.com/franciscocoya/"
              target="_blank"
            >
              franciscocoya
            </a>
          </li>
          <li>
            <HiOutlineLocationMarker size={32} color="#fb2576" />
            <p>Oviedo, Asturias (Spain)</p>
          </li>
        </ul>
      </main>
    </SecondaryLayout>
  )
}

export default ContactPage
