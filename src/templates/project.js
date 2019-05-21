import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Image from 'gatsby-image'
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
        {project.media && project.media.length && (
          <Container>
            <div
              className={projectStyles.mediaContainer}
            >
              <Image fluid={project.media[0].media.img2000} />
            </div>
          </Container>
        )}
        {/* {project.media && (

            <ul className={projectStyles.mediaWrapper}>
              {project.media.map(({ name, media }) => {
                return (
                  <li key={name}>
                    <MediaComponent {...media} />
                    <Container>
                      <div className={projectStyles.mediaContainer}>
                        <img src={media.img2000.src} />
                      </div>
                    </Container>
                  </li>
                )
              })}
            </ul>
        )} */}
        {project.contentBlocks && (
          <Container>
            {project.contentBlocks.map(({ title, content1 }) => {
              return (
                <TwoUp title={title} key={title}>
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
          img2000: fluid(maxWidth: 1000) {
            aspectRatio
            sizes
            src
            srcSet
            srcWebp
            srcSetWebp
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
