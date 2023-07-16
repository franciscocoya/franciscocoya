import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} <i>Francisco Coya</i>. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
