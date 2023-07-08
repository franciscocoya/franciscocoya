import useDeviceStore from '@/store/device.store'
import styles from './hamburgerButton.module.scss'

function HamburgerButton() {
  const { setShowMobileMenu } = useDeviceStore()

  // Show the mobile menu when the hamburger button is clicked
  const handleClick = () => {
    setShowMobileMenu(true)
  }

  return (
    <div className={styles.hamburgerButton} onClick={handleClick} role="button">
      <div className={styles.hamburgerButtonLine}></div>
      <div className={styles.hamburgerButtonLine}></div>
      <div className={styles.hamburgerButtonLine}></div>
    </div>
  )
}

export default HamburgerButton
