'use client'

import styles from './secondaryLayout.module.scss'

function SecondaryLayout({ children }) {
  return (
    <div
      className={styles.secondaryLayout}
    >
      {children}
    </div>
  )
}

export default SecondaryLayout
