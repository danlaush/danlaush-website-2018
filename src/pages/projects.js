import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class ProjectsPage extends React.Component {
  render() {
    const {name} = get(this, 'props.data.contentfulPerson')
    const projects = get(this, 'props.data.allContentfulProject.edges')

    return (
      <div>
        <Helmet title="Projects" />
        <h1>{name}</h1>
        <p>&laquo; <Link to={`/`}>Home</Link></p>
        <ul>
          {projects.map(({node}) => {
            return (
              <li key={node.slug}>
                <Link to={`/projects/${node.slug}`}>{node.title}</Link>
                <ul>
                  <li>{node.startDate} - {node.endDate}</li>
                  <li>
                    <div dangerouslySetInnerHTML={{__html: node.description.childMarkdownRemark.html}} />
                  </li>
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ProjectsPage

export const pageQuery = graphql`
  query ProjectsQuery {
    contentfulPerson {
      name
    }
    allContentfulProject {
      edges {
        node {
          title
          slug
          startDate(formatString: "MMM YYYY")
          endDate(formatString: "MMM YYYY")
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`