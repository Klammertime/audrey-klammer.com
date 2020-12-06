import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Wave from "../components/Wave"

const StyledDiv = styled.div`
  text-align: center;
  max-height: 920px;
  display: grid;
  grid: auto-flow 12em 1fr 3fr / 1fr 1.3fr 1.3fr 1fr;
`

const StyledHeader = styled.h1`
  font: normal 700 60px/1.2 Inter, sans-serif;
  position: relative;
  grid-row: 2/3;
  grid-column: 2/4;
  color: white;
  margin: 0;
  z-index: 5;
  @media (max-width: 640px) {
    font-size: 1.5rem;
    margin: 0 10px;
    line-height: 1.3;
  }
`

const Description = styled.p`
  grid-row: 3/4;
  grid-column: 2/4;
  position: relative;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin: 0;
  z-index: 5;
  @media (max-width: 640px) {
    font-size: 1.4rem;
    margin-top: 16px;
    line-height: 1.3;
  }
`
const WaveWrapper = styled.div`
  grid-row: 3/4;
  grid-column: 1/5;
  position: relative;
  z-index: 6;
  align-self: end;
  margin-bottom: -30px;
`
const Cover = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(22, 26, 37, 0.4),
    rgba(22, 26, 37, 0.4)
  );
  align-self: start;
  width: 100%;
  height: 100%;
  grid-row: 1 / 4;
  grid-column: 1 / 5;
  z-index: 4;
`

const StyledImage = styled(Img)`
  align-self: start;
  width: 100%;
  height: 100%;
  grid-row: 1 / 4;
  grid-column: 1 / 5;
  z-index: 2;
`
const HomeHero = ({ description }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home-hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 900, quality: 95) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <StyledDiv>
        <Cover />
        <StyledImage
          fluid={{
            ...data.file.childImageSharp.fluid,
            aspectRatio: 16 / 9,
          }}
          alt="imageTestTest"
        />
        <StyledHeader>
          My name is Audrey Klammer.
          <br /> I'm a UI Engineer based in San Francisco.
        </StyledHeader>
        <Description>{description}</Description>
        <WaveWrapper>
          <Wave />
        </WaveWrapper>
      </StyledDiv>
    </>
  )
}

export default HomeHero
