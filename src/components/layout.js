import React from 'react'
import Helmet from 'react-helmet'
import PageHeader from './page-header';
import PageFooter from './page-footer'
import '../assets/styles/base.css'

export default ({ children, title, link, breadcrumb }) => (
  <>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/fonts.css"/>
      {/* <link rel="preload" href="/fonts/IBMPlexMono-Light-Latin1.woff2" as="font" />
      <link rel="preload" href="/fonts/IBMPlexSans-Regular-Latin1.woff2" as="font" />
      <link rel="preload" href="/fonts/IBMPlexSans-Medium-Latin1.woff2" as="font" />
      <link rel="preload" href="/fonts/IBMPlexSans-SemiBold-Latin1.woff2" as="font" /> */}
    </Helmet>
    <PageHeader title={title} link={link} breadcrumb={breadcrumb} />
    {children}
    <PageFooter />
  </>
)
