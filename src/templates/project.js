import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'
import MediaComponent from '../components/media-component'
import TwoUp from '../components/two-up'

import projectStyles from './project.module.css'

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')

    return (
      <Layout title={project.title} breadcrumb={true}>
        <Container>
          <Helmet title={`${project.title}`} htmlAttributes={{ lang: 'en' }} />
          <div
            className={projectStyles.description}
            dangerouslySetInnerHTML={{
              __html: project.description.childMarkdownRemark.html,
            }}
          />
        </Container>
        {/* {project.media && (
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
        )} */}
        {project.contentBlocks && (
          <Container>
            {project.contentBlocks.map(({ title, content1 }) => {
              return (
                <TwoUp title={title}>
                  <div
                    className={projectStyles.contentBlocks}
                    dangerouslySetInnerHTML={{
                      __html: content1.childMarkdownRemark.html,
                    }}
                  />
                </TwoUp>
              )
            })}
          </Container>
        )}
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      contentBlocks {
        title
        content1 {
          childMarkdownRemark {
            html
          }
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
