import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../components/container'
import { graphql } from 'gatsby'

class AboutPage extends React.Component {
  render() {
    const person = get(this, 'props.data.contentfulPerson')
    const bioHtml = person.bio.childMarkdownRemark.html

    return (
      <Container>
        <Helmet title={`About ${person.name}`} htmlAttributes={
          {"lang": "en"}
        } />
        {/* <Hero data={author.node} /> */}
        <h1>{person.name}</h1>
        <p>&laquo; <Link to="/">Home</Link></p>
        <div dangerouslySetInnerHTML={{__html: bioHtml }} />
      </Container>
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