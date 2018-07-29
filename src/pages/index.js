import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class RootIndex extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const person = get(this, 'props.data.contentfulPerson')

    return (
      <div>{/*I hate this div so much. This is why we can't have nice documents*/}
        <Helmet title={person.name} />
        {/* <Hero data={author.node} /> */}
        <div className="wrapper">
          <h1>{person.name}</h1>
          <ul>
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
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPerson {
      name
      twitter
      email
    }
  }
`
