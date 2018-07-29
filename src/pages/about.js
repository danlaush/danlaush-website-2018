import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class AboutPage extends React.Component {
  render() {
    const person = get(this, 'props.data.contentfulPerson')
    const bioHtml = person.bio.childMarkdownRemark.html

    return (
      <div>
        <Helmet title={`About ${person.name}`} />
        {/* <Hero data={author.node} /> */}
        <h1>{person.name}</h1>
        <p>&laquo; <Link to="/">Home</Link></p>
        <div dangerouslySetInnerHTML={{__html: bioHtml }} />
      </div>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    contentfulPerson {
      name
      bio {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`