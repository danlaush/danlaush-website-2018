import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Container from '../components/container'
import PageHeader from '../components/page-header'
import styles from './resume.module.css'
class ResumePage extends React.Component {
  render() {
    const pageTitle = 'Resume'
    const { name } = get(this, 'props.data.contentfulPerson')
    const roles = get(this, 'props.data.allContentfulRole.edges')

    return (
      <Container>
        <Helmet
          title={`${pageTitle} | ${name}`}
          htmlAttributes={{ lang: 'en' }}
        />
        <PageHeader title={pageTitle} breadcrumb={{ url: '/', text: 'Home' }} />
        <ul>
          {roles.map(({ node }, index) => {
            return (
              <li key={index} className={styles.role}>
                <p className={styles.roleName}>{node.entryTitle}</p>
                <p>
                  <strong>{node.organisation}</strong>
                </p>
                <p className={styles.roleDates}>
                  <strong>
                    {node.startDate} - {node.endDate}
                  </strong>
                </p>
                {node.skillsLearned && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.skillsLearned.childMarkdownRemark.html,
                    }}
                  />
                )}
                {node.projects && 
                  <p>
                    <strong>Projects</strong>
                  </p>}
                {node.projects && 
                  <ul>
                    {node.projects.map((project, index2) => {
                      return (
                        <li key={index2}>
                          <Link to={`/projects/${project.slug}`}>
                            {project.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
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
    allContentfulRole(sort: { fields: [endDate], order: DESC }) {
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
          projects {
            title
            slug
          }
        }
      }
    }
  }
`
