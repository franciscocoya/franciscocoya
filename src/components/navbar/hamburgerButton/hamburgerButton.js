import useDeviceStore from '@/store/device.store'
import styles from './hamburgerButton.module.scss'

function HamburgerButton() {
  const { setIsMenuOpen } = useDeviceStore()

  // Show the mobile menu when the hamburger button is clicked
  const handleClick = () => {
    setIsMenuOpen(true)
  }

  return (
    <div className={styles.hamburgerButtonWrapper} suppressHydrationWarning>
      <div className={styles.hamburgerButton} onClick={handleClick}>
        <div className={styles.hamburgerButtonLine}></div>
        <div className={styles.hamburgerButtonLine}></div>
        <div className={styles.hamburgerButtonLine}></div>
      </div>
    </div>
  )
}

export default HamburgerButton
