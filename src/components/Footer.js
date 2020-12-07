/** @format */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

const FooterGrid = styled.nav`
  max-width: 100vw;
  margin: 0 auto;
  font: normal 16px/18px Inter, sans-serif;
  display: grid;
  padding: 3vw;
  place-items: center 
  grid-template-rows: auto;
  grid-template-columns: 1fr auto auto;
  grid-auto-columns: 1fr;
  grid-column-gap: 8vw;
  grid-row-gap: 16px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    padding: 4vw;
    grid-row-gap: 40px;
    grid-template-rows: auto auto auto;
  }
`

const FooterNav = styled.div`
  display: flex;
  align-self: start;
  flex-direction: row;
  @media (max-width: 991px) {
    margin-right: 20px;
  }
`

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 17px;
  line-height: 24px;
  margin-right: 3vw;
  @media (max-width: 991px) {
    margin-right: 20px;
  }
`

const FooterLinks = styled.div`
  display: flex;
  padding-right: 4vw;
  flex-direction: column;
  align-self: start;
  @media (max-width: 991px) {
    flex-direction: row;
  }
`

const StyledFooterLinks = styled.a`
  color: #fff;
  font: normal 600 13px/10px Inter, sans-serif;
  margin: 6px 0;
  padding: 6px 0;
  @media (max-width: 991px) {
    flex-direction: row;
    margin-right: 20px;
  }
`

const StyledHeader = styled.h3`
  margin: 0 0 12px 0;
  font: normal 700 24px/32px Inter, sans-serif;
  color: white;
`

const StyledText = styled.div`
  padding: 0;
  margin-bottom: 12px;
`
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  const { twitter, github, linkedin } = data.site.siteMetadata.social

  return (
    <FooterGrid>
      <FooterNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/work">Work</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </FooterNav>

      <div>
        <StyledHeader> Let's work together</StyledHeader>
        <StyledText>Have a project in mind? Don’t hesitate to contact me.</StyledText>
        {/* <StyledFooterLinks href="https://example.com" target="_blank" rel="noopener noreferrer">
          contact@audreyklammer.com
        </StyledFooterLinks> */}
      </div>

      <FooterLinks>
        <StyledFooterLinks href={twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </StyledFooterLinks>
        <StyledFooterLinks href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </StyledFooterLinks>
        <StyledFooterLinks href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </StyledFooterLinks>
      </FooterLinks>
    </FooterGrid>
  )
}

export default Footer
