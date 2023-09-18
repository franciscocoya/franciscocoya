import styles from './baseButton.module.scss'

function BaseButton({ text, onClick }) {
  return (
    <button className={styles.baseButton} onClick={onClick}>
      {text}
    </button>
  )
}

export default BaseButton
