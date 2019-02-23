import React from 'react'
import Link from 'gatsby-link'
import TagToggle from '../components/tag-toggle'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    try {
      const {name} = get(this, 'props.data.contentfulPerson')
      const projectsRaw = get(this, 'props.data.allContentfulProject.edges')
      const tagsRaw = get(this, 'props.data.allContentfulTag.edges')

      const projectsArray = projectsRaw.map(({node}) => node)
      const tagsArray = tagsRaw.map(({node}) => node)

      this.state = {
        name,
        projectsAll: projectsArray,
        projects: projectsArray,
        tags: tagsArray.map(tag => {
          return {
            id: tag.id,
            name: tag.name,
            active: false
          }
        })
      }
    } catch(err) {
      throw 'oops' + err
    }
  }

  handleTagClick(tagId, value) {
    this.toggleTagActive(tagId, value, this.updateProjects)
  }

  toggleTagActive (tagId, value, callback)  {
    this.setState({
      tags: this.state.tags.map((tag) => {
        return tag.id === tagId 
          ? {
            ...tag,
            active: value
          }
          : tag
      })
    }, callback)
  }

  hasActiveTags() {
    const removeInactiveTags = this.state.tags.filter(tag => {
      return tag.active
    })
    return !!removeInactiveTags.length
  }

  updateProjects() {
    this.setState({
      projects: !this.hasActiveTags()
        // If no active tags, show all projects
        ? this.state.projectsAll
        // If active tags, remove projects which don't have a tag
        // that matches an active tag
        : this.state.projectsAll.filter(project => {
          if(!project.tags) return
          const filterProjectsWithoutMatchingTags = project.tags.filter(tag => {
            const isTagInGlobalActiveTags = this.state.tags.filter(globalTag => {              
              return tag.id === globalTag.id && globalTag.active
            })
            return !!isTagInGlobalActiveTags.length
          })
          return !!filterProjectsWithoutMatchingTags.length
      })
    })
  }

  renderProjects() {
    if(!this.state.projects) {
      return (
        <li>Sorry, no results matched that tag</li>
      )
    } else  {
      return this.state.projects.map(project => {
        return (
          <li key={project.slug}>
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            <ul>
              <li>{project.startDate} - {project.endDate}</li>
              <li>
                <div dangerouslySetInnerHTML={{__html: project.description.childMarkdownRemark.html}} />
              </li>
              {project.tags &&
                <li>Tags: {project.tags.map(tag => tag.name).join(', ')}</li>
              }
            </ul>
          </li>
        )
    })}
  }

  render() {

    return (
      <div>
        <Helmet title="Projects" />
        <h1>{this.state.name}</h1>
        <p>&laquo; <Link to={`/`}>Home</Link></p>

        <aside>
          <form>
            <h2>Tags</h2>
            <fieldset>
              {this.state.tags.map(tag => {
                return (
                  <TagToggle key={tag.id} id={tag.id} name={tag.name} update={this.handleTagClick.bind(this)} />
                )
              })}
            </fieldset>
          </form>
        </aside>

        <ul>
          {this.renderProjects()}
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
    allContentfulTag {
      edges {
        node {
          id
          name
        }
      }
    }
    allContentfulProject(sort: {fields: [endDate], order:DESC}) {
      edges {
        node {
          title
          slug
          tags {
            id
            name
          }
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