import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Container from '../components/container'
import MediaComponent from '../components/media-component'
import PageHeader from '../components/page-header'

import projectStyles from './project.module.css'

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')

    return (
      <Container hasSidebar={true}>
        <Helmet title={`${project.title}`} htmlAttributes={{ lang: 'en' }} />
        <PageHeader title={project.title} breadcrumb={{ url: '/projects', text: 'Projects'}} />
        <div
          className={[
            projectStyles.wrapper,
            project.media && projectStyles.wrapperHasMedia,
          ].join(' ')}
        >
          {project.media && (
            <div className={projectStyles.mediaWrapper}>
              <ul className={projectStyles.media}>
                {project.media.map(({ name, media }) => {
                  return (
                    <li key={name}>
                      <MediaComponent {...media} />
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          <div
            className={projectStyles.contentColumn}
            dangerouslySetInnerHTML={{
              __html: project.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Container>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      media {
        name
        media {
          description
          file {
            contentType
            url
          }
          img2000: resize(width: 2000) {
            src
            width
            height
          }
          img600: resize(width: 600) {
            src
            width
            height
          }
        }
      }
    }
  }
`
