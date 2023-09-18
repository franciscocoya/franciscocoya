'use client'

import styles from './secondaryLayout.module.scss'

function FullWidthLayout({ children }) {
  return (
    <div className={styles.fullWidthLayout} style={{ width: '100%', height: '100%', marginTop: '80px' }}>
      {children}
    </div>
  )
}

export default FullWidthLayout
