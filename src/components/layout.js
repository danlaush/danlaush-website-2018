import React from 'react'
import Link from 'gatsby-link'
// import base from './base.css'
import Helmet from 'react-helmet'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div className="container">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/fonts.css"/>
          {/* <link rel="preload" href="/fonts/IBMPlexMono-Light-Latin1.woff2" as="font" />
          <link rel="preload" href="/fonts/IBMPlexSans-Regular-Latin1.woff2" as="font" />
          <link rel="preload" href="/fonts/IBMPlexSans-Medium-Latin1.woff2" as="font" />
          <link rel="preload" href="/fonts/IBMPlexSans-SemiBold-Latin1.woff2" as="font" /> */}
        </Helmet>
        {children}
      </div>
    )
  }
}

export default Layout
