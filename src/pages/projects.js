import React from 'react'
import { navigate, graphql } from 'gatsby'
import Link from 'gatsby-link'
import TagToggle from '../components/tag-toggle'
import Container from '../components/container'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import slugify from 'slugify'
import styles from './projects.module.css'
import { Location } from '@reach/router'

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    try {
      const {name} = get(this, 'props.data.contentfulPerson')
      const projectsRaw = get(this, 'props.data.allContentfulProject.edges')
      const tagsRaw = get(this, 'props.data.allContentfulTag.edges')

      const projectsArray = projectsRaw.map(({node}) => node)
      const tagsArray = tagsRaw.map(({node}) => node)
      const featuredTagsArray = tagsArray.filter(i => i.featured)


      this.state = {
        name,
        tags: featuredTagsArray.map(tag => {
          return {
            id: tag.id,
            name: tag.name,
            active: false
          }
        }),
        projectsAll: projectsArray,
        projects: projectsArray
      }
    } catch(err) {
      throw 'oops' + err
    }
  }

  componentDidMount() {
    // let activeTags = []
    // const activeTagsByQueryParam = new URLSearchParams(this.props.location.search).get('tags')
    // if(activeTagsByQueryParam) {
    //   activeTags = activeTagsByQueryParam.split(',')
    // }

    // this.setState({
    //   tags: this.state.tags.map(tag => {
    //     return {
    //       id: tag.id,
    //       name: tag.name,
    //       active: activeTags.length 
    //         ? this.isTagActive(tag, activeTags)
    //         : false
    //     }
    //   }),
    //   projects: this.filterProjectsByActiveTags()
    // })
  }

  isTagActive(tag, activeTags) {
    const slug = slugify(tag.name, { lower: true })
    const foundIt = activeTags.indexOf(slug) > -1
    return foundIt
  }

  handleTagClick(tagId, value) {
    this.toggleTagActive(tagId, value, this.handleTagsUpdate)
  }

  toggleTagActive (tagId, value, callback)  {
    const tagsUpdated = this.state.tags.map((tag) => {
      return tag.id === tagId 
        ? {
          ...tag,
          active: value
        }
        : tag
    })

    this.setState({
      tags: tagsUpdated
    }, callback)
  }

  getActiveTags() {
    return this.state.tags.filter(i => i.active)
  }

  hasActiveTags() {
    return !!this.getActiveTags().length
  }

  handleTagsUpdate() {
    const activeTags = this.getActiveTags()
    const tagString = activeTags.map(i => slugify(i.name, {
      lower: true
    }))

    const queryParams = new URLSearchParams(this.state.queryParams)
    if(tagString.length) {
      queryParams.set('tags', tagString)
    } else {
      queryParams.delete('tags')
    }

    navigate(`/projects?${queryParams.toString()}`)
    
    // if(this.props.history) {
    //   this.props.history.push({
    //     pathname: '/projects',
    //     search: queryParams.toString()
    //   })
    // }

    this.updateProjects()
  }

  filterProjectsByActiveTags() {
    const { projectsAll, tags } = this.state

    if(!this.hasActiveTags()) return projectsAll

    return projectsAll.filter(project => {
      if(!project.tags) return
      const filterProjectsWithoutMatchingTags = project.tags.filter(tag => {
        const isTagInGlobalActiveTags = tags.filter(globalTag => {              
          return tag.id === globalTag.id && globalTag.active
        })
        return !!isTagInGlobalActiveTags.length
      })
      return !!filterProjectsWithoutMatchingTags.length
    })
  }

  updateProjects() {
    this.setState({
      projects: !this.hasActiveTags()
        // If no active tags, show all projects
        ? this.state.projectsAll
        // If active tags, remove projects which don't have a tag
        // that matches an active tag
        : this.filterProjectsByActiveTags()
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
      <Container>
        <Helmet title="Projects" htmlAttributes={
          {"lang": "en"}
        } />
        <h1>{this.state.name}</h1>
        <p>&laquo; <Link to={`/`}>Home</Link></p>
        
        <aside>
          <form>
            <h2>Filter by tags</h2>
            <fieldset className={styles.tagsContainer}>
              {this.state.tags.map(tag => {
                return (
                  <TagToggle key={tag.id} active={tag.active} id={tag.id} name={tag.name} update={this.handleTagClick.bind(this)} />
                )
              })}
            </fieldset>
          </form>
        </aside>

        <ul>
          {this.renderProjects()}
        </ul>
      </Container>
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
          featured
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