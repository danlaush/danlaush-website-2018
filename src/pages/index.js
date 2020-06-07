import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'
import TwoUp from '../components/two-up'
import styles from './index.module.css'

class RootIndex extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // const person = get(this, 'props.data.contentfulPerson')
    const headerTitle = (<>Front-end developer.
      <br />I build things for <span>people</span>.</>)
    const headerLink = {
      url: '/about',
      text: 'About me'
    }
    const roles = get(this, 'props.data.allContentfulRole.edges')

    return (
      <Layout title={headerTitle} link={headerLink}>
        <Container>
          <Helmet title="Dan Laush | Front-end developer." htmlAttributes={{ lang: 'en' }}>
            <meta name="description" content="I build things for people." />
          </Helmet>
          <TwoUp title="Work">
            <ul className={styles.projectsList}>
              <li>
                <Link to="/projects/our-watch" className="link">Our Watch</Link>
                <p className={styles.projectsListMeta}>
                  JavaScript, Vue, WordPress, Static site <span>2019</span>
                </p>
              </li>
              <li>
                <Link to="/projects/worksafe" className="link">WorkSafe</Link>
                <p className={styles.projectsListMeta}>
                  JavaScript, Vue, Drupal <span>2018</span>
                </p>
              </li>
              <li>
              <Link to="/projects/side-projects" className="link">Side projects</Link>
                <p className={styles.projectsListMeta}>
                  JavaScript <span>2018</span>
                </p>
              </li>
              <li>
              <Link to="/projects/talks" className="link">Talks</Link>
                <p className={styles.projectsListMeta}>
                  Public speaking
                </p>
              </li>
              {/* <li>
                <a href="#" className="link">Nike</a>
                <p className={styles.projectsListMeta}>
                  HTML, CSS, Zurb Foundation for Emails <span>2019</span>
                </p>
              </li>
              <li>
                <a href="#" className="link">Wellways</a>
                <p className={styles.projectsListMeta}>
                  Twig, Drupal 8 <span>2019</span>
                </p>
              </li> */}
            </ul>
          </TwoUp>

          <TwoUp title="Resume" pdf>
            {roles.map((
              {node: { 
                entryTitle,
                url,
                organisation,
                startDate,
                endDate,
                skillsLearned: {
                  childMarkdownRemark: {
                    html
                  }
                }
              }}) => {
              return (<>
                <h3>{entryTitle}</h3>
                <p className={styles.roleMeta}>
                  <a className={styles.roleLink} href={url}>
                    {organisation}
                  </a>
                  &nbsp;<span className={styles.roleDuration}>{startDate}—{endDate}</span>
                </p>
                <div
                  className={styles.roleDetails}
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                />
              </>)
            })}
            <h3>See complete resume</h3>
            <a href="/Laush-resume.pdf">Download full history (PDF)</a>
            {/* <div>
            <h3>Senior Front-end Developer</h3>
            <p className="role-meta">
              <a className="role-link" href="https://today.design">
                Today Strategic Design
              </a>
              &nbsp;<span className="role-duration">Nov 2017—Jun 2019</span>
            </p>
            <h4>Key responsibilities</h4>
            <ul className="list">
              <li>
                Led development of websites and apps at an ethical design agency
              </li>
              <li>
                Worked with government and non-profit clients to deliver
                best-in-class design and technical solutions
              </li>
              <li>
                Collaborated with design and content teams to define and
                prioritise development efforts
              </li>
            </ul>
            <h4>Tools used</h4>
            <ul className="list">
              <li>
                HTML5, CSS3, JavaScript, Vue, Nuxt, Webpack, Drupal, WordPress,
                SilverStripe
              </li>
            </ul>
            <h3>Front-end developer</h3>
            <p className="role-meta">
              <a className="role-link" href="https://tundra.com.au">
                Tundra
              </a>
              &nbsp;<span className="role-duration">Jun 2016—Oct 2017</span>
            </p>
            <h4>Key responsibilities</h4>
            <ul className="list">
              <li>
                Led development of websites and apps at an ethical design agency
              </li>
              <li>
                Worked with government and non-profit clients to deliver
                best-in-class design and technical solutions
              </li>
              <li>
                Collaborated with design and content teams to define and
                prioritise development efforts
              </li>
            </ul>
            <h4>Tools used</h4>
            <ul className="list">
              <li>
                HTML5, CSS3, JavaScript, Vue, Nuxt, Webpack, Drupal, WordPress,
                SilverStripe
              </li>
            </ul>
            </div> */}
          </TwoUp>
        </Container>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPerson {
      name
      title
      twitter
      email
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
          url
        }
      }
    }
  }
`
