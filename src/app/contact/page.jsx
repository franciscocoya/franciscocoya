import Link from 'next/link'
import styles from './page.module.scss'
import BaseLayout from '@/layouts/baseLayout'

function ContactPage() {
  return (
    <BaseLayout>
      <main className={styles.main}>
        <h1>Contact</h1>
        <ul>
          <li>
            <a href="mailto:contact@franciscocoya.es" target="_blank">
              contact@franciscocoya.es
            </a>
          </li>
          <li>
            <a href="mailto:franciscocoya@gmail.com" target="_blank">
              franciscocoya@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/franciscocoya/"
              target="_blank"
            >
              franciscocoya
            </a>
          </li>
          <li>Oviedo, Asturias (Spain)</li>
        </ul>
      </main>
    </BaseLayout>
  )
}

export default ContactPage
