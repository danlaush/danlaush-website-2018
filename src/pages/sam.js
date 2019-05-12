import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import { graphql } from 'gatsby'
// import '@ibm/plex/css/ibm-plex.css'
import './sam.css'

class TestPage extends React.Component {
  render() {
    const pageTitle = 'Test'

    return (
      <Layout className="container">
        <Helmet
          title={`${pageTitle} | Dan Laush`}
          htmlAttributes={{ lang: 'en' }}
        />
        <header>
          <h1 className="header-title">
            Senior front-end developer.
            <br />I build things for <span>people</span>.
          </h1>
          <p className="header-name">
            <strong>Dan Laush</strong>
          </p>
          <p className="header-link">
            <a href="#">About me →</a>
          </p>
        </header>
        <main>
          <section>
            <h2 className="section-heading">Projects</h2>
            <div className="section-content">
              <ul className="projects-list">
                <li>
                  <a href="#">Our Watch</a>
                  <p className="projects-list-meta">
                    JavaScript, Vue, WordPress, Static site <span>2019</span>
                  </p>
                </li>
                <li>
                  <a href="#">WorkSafe</a>
                  <p className="projects-list-meta">
                    JavaScript, Vue, Drupal <span>2019</span>
                  </p>
                </li>
                <li>
                  <a href="#">VAEA</a>
                  <p className="projects-list-meta">
                    HTML, CSS, NPM scripts <span>2019</span>
                  </p>
                </li>
                <li>
                  <a href="#">Nike</a>
                  <p className="projects-list-meta">
                    HTML, CSS, Zurb Foundation for Emails <span>2019</span>
                  </p>
                </li>
                <li>
                  <a href="#">Wellways</a>
                  <p className="projects-list-meta">Twig, Drupal 8 <span>2019</span></p>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="section-heading">Resume</h2>
            <div className="section-content">
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
                  Led development of websites and apps at an ethical design
                  agency
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
                  HTML5, CSS3, JavaScript, Vue, Nuxt, Webpack, Drupal,
                  WordPress, SilverStripe
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
                  Led development of websites and apps at an ethical design
                  agency
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
                  HTML5, CSS3, JavaScript, Vue, Nuxt, Webpack, Drupal,
                  WordPress, SilverStripe
                </li>
              </ul>
            </div>
          </section>
          <section className="contact">
            <h2 className="section-heading">Get in touch</h2>
            <div className="section-content">
              <p>
                <a href="mailto:dan.laush@gmail.com">dan.laush@gmail.com</a>
              </p>
              <p>
                <a href="https://twitter.com/danlaush">@danlaush</a>
              </p>
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}

export default TestPage
