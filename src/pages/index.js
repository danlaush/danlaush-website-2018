import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'
import styles from './index.module.css'

class RootIndex extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const person = get(this, 'props.data.contentfulPerson')

    return (
      <Layout>
        <Container>
          <Helmet title={person.name} htmlAttributes={{ lang: 'en' }} />
          <h1 className={styles.title}>{person.name}</h1>
          <p className={styles.personTitle}>{person.title}</p>
          <ul className={styles.list}>
            <li>
              <Link to={`/about`}>
                About <span className="sr-only">{person.name}</span>
              </Link>
            </li>
            <li>
              <Link to={`/projects`}>Projects</Link>
            </li>
            <li>
              <Link to={`/resume`}>Resume</Link>
            </li>
          </ul>
          <h2>Contact</h2>
          <ul className={styles.list}>
            <li>
              <a href={`https://twitter.com/${person.twitter}`}>
                <span className="sr-only">Twitter link: </span>
                {person.twitter}
              </a>
            </li>
            <li>
              <a href={`mailto:${person.email}`}>
                <span className="sr-only">Email link: </span>
                {person.email}
              </a>
            </li>
          </ul>
        </Container>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPerson {
      name
      title
      twitter
      email
    }
  }
`
