import React from 'react'

import base from './base.css'
import styles from './container.module.css'

export default ({ children }) => (
  <div className={styles.container}>{children}</div>
)
