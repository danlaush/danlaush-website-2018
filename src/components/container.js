import React from 'react'

import base from './base.css'
import styles from './container.module.css'

export default ({ children, hasSidebar }) => (
  <div className={[
    styles.container,
    hasSidebar ? styles.hasSidebar : null
  ].filter(Boolean).join(' ')}>{children}</div>
)
