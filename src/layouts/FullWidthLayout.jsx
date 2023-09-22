'use client'

import styles from './fullWidthLayout.module.scss'

function FullWidthLayout({ children }) {
  return <div className={styles.fullWidthLayout}>{children}</div>
}

export default FullWidthLayout
