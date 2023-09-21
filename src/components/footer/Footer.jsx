import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Francisco Coya. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
