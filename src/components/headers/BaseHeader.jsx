import BaseNavbar from '../navbar/baseNavbar'
import styles from './baseHeader.module.scss'

function BaseHeader() {
  return (
    <header className={styles.header}>
      <BaseNavbar />
    </header>
  )
}

export default BaseHeader
