import styles from './baseButton.module.scss'

function BaseButton({ text, onClick, type }) {
  const selectButtonAppearance = () => {
    switch (type) {
      case 'primary':
        return styles.buttonPrimary
      case 'primary_outlined':
        return styles.buttonPrimaryOutlined
      case 'secondary':
        return styles.buttonSecondary
      case 'tertiary':
        return styles.buttonTertiary
      case 'white':
        return styles.buttonWhite
      default:
        return styles.buttonPrimary
    }
  }

  return (
    <button className={selectButtonAppearance()} onClick={onClick}>
      {text}
    </button>
  )
}

export default BaseButton
