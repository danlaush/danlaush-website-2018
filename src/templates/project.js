import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Link from 'gatsby-link'
// import Img from 'gatsby-image'

// import heroStyles from '../components/hero.module.css'

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={`${project.title}`} />
        <div className="wrapper">
          <h1 className="section-headline">{project.title}</h1>
          <p>&laquo; <Link to={`/projects`}>Projects</Link></p>
          <div
            dangerouslySetInnerHTML={{
              __html: project.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
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
    }
  }
`
