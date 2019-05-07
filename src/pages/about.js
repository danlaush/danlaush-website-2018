import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../components/container'
import PageHeader from '../components/page-header'
import { graphql } from 'gatsby'

class AboutPage extends React.Component {
  render() {
    const pageTitle = 'About'
    const person = get(this, 'props.data.contentfulPerson')
    const bioHtml = person.bio.childMarkdownRemark.html

    return (
      <Container>
        <Helmet title={`${pageTitle} | ${person.name}`} htmlAttributes={
          {"lang": "en"}
        } />
        <PageHeader title={pageTitle} breadcrumb={{ url: '/', text: 'Home'}} />
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