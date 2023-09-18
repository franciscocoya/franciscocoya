'use client'

import styles from './baseLayout.module.scss'

function BaseLayout({ children }) {
  return <div className={styles.baseLayout}>{children}</div>
}

export default BaseLayout
