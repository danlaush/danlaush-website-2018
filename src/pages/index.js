import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Container from '../components/container'

class RootIndex extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const person = get(this, 'props.data.contentfulPerson')

    return (
      <Container>
        <Helmet title={person.name} htmlAttributes={
          {"lang": "en"}
        } />
        {/* <Hero data={author.node} /> */}
        <div className="wrapper">
          <h1>{person.name}</h1>
          <ul>
            <li>{person.title}</li>
            <li>
              <Link to={`/about`}>
                About <span className="sr-only">{person.name}</span>
              </Link>
            </li>
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
          <h2>Things</h2>
          <ul>
            <li>
              <Link to={`/projects`}>
                Projects
              </Link>
            </li>
            <li>
              <Link to={`/resume`}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </Container>
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
