import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Container from '../components/container'

import projectStyles from './project.module.css'

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')

    return (
      <Container>
        <Helmet title={`${project.title}`} />
        <div className="wrapper">
          <h1 className="section-headline">{project.title}</h1>
          <p>&laquo; <Link to={`/projects`}>Projects</Link></p>
          <div
            dangerouslySetInnerHTML={{
              __html: project.body.childMarkdownRemark.html,
            }}
          />
          {project.media && <ul class={projectStyles.media}>
            {project.media.map(({name, media}) => {
              return (
                <li key={name}>
                  <img
                    src={media.img1000.src}
                    width={media.img1000.width/2}
                    height={media.img1000.height/2} />
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
          img1000: resize(width: 1000) {
            src
            width
            height
          }
          img400: resize(width: 400) {
            src
            width
            height
          }
        }
      }
    }
  }
`
