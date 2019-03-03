import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Container from '../components/container'

class ResumePage extends React.Component {
  render() {
    const {name} = get(this, 'props.data.contentfulPerson')
    const roles = get(this, 'props.data.allContentfulRole.edges')

    return (
      <Container>
        <Helmet title="Resume" />
        <h1>{name}</h1>
        <p>&laquo; <Link to={`/`}>Home</Link></p>
        <ul>
          {roles.map(({node}, index) => {
            return (
              <li key={index}>
                {node.entryTitle}
                <ul>
                  <li>{node.organisation}</li>
                  <li>{node.startDate} - {node.endDate}</li>
                </ul>
                {node.skillsLearned &&
                  <span dangerouslySetInnerHTML={{__html: node.skillsLearned.childMarkdownRemark.html}} />
                }
              </li>
            )
          })}
        </ul>
      </Container>
    )
  }
}

export default ResumePage

export const pageQuery = graphql`
  query ResumeQuery {
    contentfulPerson {
      name
    }
    allContentfulRole(sort: {fields: [endDate], order:DESC}) {
      edges {
        node {
          entryTitle
          organisation
          startDate(formatString: "MMM YYYY")
          endDate(formatString: "MMM YYYY")
          skillsLearned {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`