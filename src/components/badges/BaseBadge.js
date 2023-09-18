// import styles from './baseBadge.module.scss'

function BaseBadge({
  text,
  onClick,
  color = '#fff',
  outlined = true,
  isBig = false,
}) {
  const styles = {
    padding: isBig ? '1rem 2rem' : '0.40rem 0.80rem',
    fontSize: '0.90rem',
    fontWeight: '400',
    lineHeight: '1',
    textAlign: 'center',
    borderRadius: isBig ? '100px' : '20px',
    color: color,
    backgroundColor: outlined ? 'transparent' : color,
    border: `1.5px solid ${color}`,
    cursor: onClick ? 'pointer' : 'default',
  }

  return (
    <span style={styles} onClick={onClick}>
      {text}
    </span>
  )
}

export default BaseBadge
