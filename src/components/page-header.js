import React from 'react'
import Link from 'gatsby-link'
import styles from './page-header.module.css'
import Container from './container'

export default ({ title, link, breadcrumb }) => (
  <Container>
    <header>
      <h1 className={styles.title}>{title}</h1>
      {!!breadcrumb && <p className={styles.breadcrumb}>
        <Link to="/">&larr; Home</Link>
      </p>}
      <p className={styles.name}>
        <Link to="/" className={styles.nameLink}>Dan Laush</Link>
      </p>
      {link && <p className={styles.link}>
        <Link to={link.url}>{link.text} →</Link>
      </p>}
    </header>
  </Container>
)
