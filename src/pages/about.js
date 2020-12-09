/** @format */

import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Skills from '../components/Skills'
import Reviews from '../components/Reviews'
import Section from '../components/Section'
import downloadFile from '../data/downloads/Resume_Audrey_Klammer.pdf'

const AboutImgWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 1/6;
  @media (max-width: 990px) {
    grid-row: 1/2;
    grid-column: 3/11;
  }
`
const AboutTextWrapper = styled.div`
  grid-column: 7/12;
  grid-row: 1/2
  align-self: center;
  justify-self: start;
  display: grid;
  grid: auto-flow auto / 1fr;
  grid-row-gap: 18px;
  @media (max-width: 990px) {
    grid-row: 2/3;
    grid-column: 2/12;
  }
`

const StyledBlockquote = styled.blockquote`
  margin: 24px 0;
  padding: 8px 30px;
  border-left: 2px solid #f96a4c;
  font-size: 17px;
  line-height: 24px;
  text-align: left;
`
const AboutPage = ({ location, data }) => {
  const { pageHeader, bioText, bioHeader, author, quote } = data.pageContentJson

  return (
    <Layout header={'About'} location={location} pageDescription={pageHeader}>
      <SEO title="about" />
      <Section>
        <AboutImgWrapper>
          <Img fluid={data.file.childImageSharp.fluid} alt="Audrey Klammer about me pic" />
        </AboutImgWrapper>
        <AboutTextWrapper>
          <h2>{bioHeader}</h2>
          <p>{bioText}</p>
          <a href={downloadFile} download>
            Download my resume
          </a>
          <StyledBlockquote>{quote}</StyledBlockquote>- {author}
        </AboutTextWrapper>
      </Section>
      <Skills />
      <Reviews />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    pageContentJson(page: { eq: "about" }) {
      pageHeader
      bioText
      bioHeader
      author
      quote
    }
    file(relativePath: { eq: "profile-pic.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
