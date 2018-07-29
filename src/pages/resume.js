import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class ResumePage extends React.Component {
  render() {
    const {name} = get(this, 'props.data.contentfulPerson')
    const roles = get(this, 'props.data.allContentfulRole.edges')

    return (
      <div>
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
      </div>
    )
  }
}

export default ResumePage

export const pageQuery = graphql`
  query ResumeQuery {
    contentfulPerson {
      name
    }
    allContentfulRole {
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