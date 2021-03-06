/** @format */

import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const StyledSection = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  display: flex;
  min-height: 26vw;
  background-color: #f1ede9;
`

const SectionAngle = styled.div`
  position: relative;
  z-index: 5;
  overflow: hidden;
  height: 5vw;
  margin-top: -5vw;
`

const Angle = styled.div`
  position: absolute;
  left: -10vw;
  bottom: -5vw;
  width: 120vw;
  height: 20vw;
  background-color: #fff;
  transform: translate(0px, 12.5vw) rotate(-2.5deg);
`

const Header = styled.h2`
  margin-bottom: 0px;
  font-size: 3.7vw;
  @media (max-width: 940px) {
    font-size: 7vw;
  }
`

const Divider = styled.div`
  width: 70px;
  height: 3px;
  background-color: var(--color-orange);
  display: block;
  margin: 20px auto;
`

const Description = styled.p`
  max-width: 700px;
  color: #777;
  margin-bottom: 16px;
  font-size: 17px;
  line-height: 28px;
`

const StyledImage = styled(Img)`
  align-self: start;
  width: 100%;
  height: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / 5;
  z-index: 2;
`

const BlogHeading = styled.div`
  text-align: center;
  max-height: 920px;
  display: grid;
  grid: auto-flow 25vw 25vw / 1fr 1.5fr 1.5fr 1fr;
  min-height: 10vw;
`

const Cover = styled.div`
  background-image: linear-gradient(180deg, rgba(22, 26, 37, 0.4), rgba(22, 26, 37, 0.4));
  align-self: start;
  width: 100%;
  height: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / 5;
  z-index: 3;
`

const PageHeaderSection = ({ header, pageDescription, templateHeader }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "thinking.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 900, quality: 50) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      {templateHeader ? (
        <BlogHeading>
          <Cover />
          <StyledImage
            fluid={{
              ...data.file.childImageSharp.fluid,
              aspectRatio: 16 / 9,
            }}
            alt="home-hero"
          />
        </BlogHeading>
      ) : (
        <div>
          <StyledSection>
            <Header>{header}</Header>
            <Divider />
            <Description>{pageDescription}</Description>
          </StyledSection>
          <SectionAngle>
            <Angle />
          </SectionAngle>
        </div>
      )}
    </>
  )
}
export default PageHeaderSection
