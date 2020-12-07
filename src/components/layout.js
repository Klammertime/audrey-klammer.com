/** @format */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import HomeHero from '../components/HomeHero'
import PageHeader from '../components/PageHeader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Site = styled.div`
  background: white;
  min-height: 100vh;
  display: grid;
  grid:
    auto-flow minmax(4em, auto) 1fr minmax(1em, auto) / 2em 1fr minmax(auto, 60em)
    1fr 2em;
`

const SiteHeader = styled.header`
  color: black;
  grid-column: span 5;
  grid-row: 1;
`

const SiteMain = styled.main`
  background: white;
  grid-column: span 5;
`

const SiteFooter = styled.footer`
  grid-column: span 5;
  background-color: #433056;
  color: #fff;
  padding: 0;
`

const FooterBottom = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  padding: 1.6vw 3vw;
`

const Layout = ({ location, children, pageDescription, templateHeader, header }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          heading
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const { description, heading } = data.site.siteMetadata

  return (
    <Site data-is-root-path={isRootPath}>
      <SiteHeader role="banner">
        <Nav />
      </SiteHeader>
      <SiteMain role="main">
        {isRootPath ? (
          <HomeHero description={description} heading={heading} />
        ) : (
          <PageHeader
            templateHeader={templateHeader}
            header={header}
            pageDescription={pageDescription}
          />
        )}
        {children}
      </SiteMain>
      <SiteFooter role="contentinfo">
        <Footer />
        <FooterBottom>
          © {data.site.siteMetadata.title} - {new Date().getFullYear()}
        </FooterBottom>
      </SiteFooter>
    </Site>
  )
}

export default Layout
