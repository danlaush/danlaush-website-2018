import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Container from '../components/container'
import MediaComponent from '../components/media-component'

import projectStyles from './project.module.css'

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')

    return (
      <Container>
        <Helmet title={`${project.title}`} htmlAttributes={
          {"lang": "en"}
        } />
        <div className={[
          projectStyles.wrapper, 
          project.media && projectStyles.wrapperHasMedia
        ].join(' ')}>
          <div className={projectStyles.contentColumn}>
            <h1 className="section-headline">{project.title}</h1>
            <p>&laquo; <Link to={`/projects`}>Projects</Link></p>
            <div
              dangerouslySetInnerHTML={{
                __html: project.body.childMarkdownRemark.html,
              }}
            />
          </div>
          {project.media && <ul className={projectStyles.media}>
            {project.media.map(({name, media}) => {
              return (
                <li key={name}>
                  <MediaComponent {...media} />
                </li>
              )
            })}
          </ul>}
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
          img1000: resize(width: 1000) {
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
