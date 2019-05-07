import React from 'react'
import Link from 'gatsby-link'
import styles from './page-header.module.css'

export default ({ title, breadcrumb }) => (
  <div className={styles.container}>
    <h1 className="section-headline">{title}</h1>
    {breadcrumb && <p>
      &laquo; <Link to={breadcrumb.url}>{breadcrumb.text}</Link>
    </p>}
  </div>
)
