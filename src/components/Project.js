import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`

const Heading = styled.h4`
  margin: 10px 0 12px 0;
  font: normal 700 20px/28px Inter, sans-serif;
`

const ImgOverlay = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(22, 26, 37, 0.4),
    rgba(22, 26, 37, 0.4)
  );
}
`

const LinkWrapper = styled(Link)`
  margin-bottom: 5%;
  width: 100%;
  max-width: 100%;
  padding: 20px;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition: opacity 500ms ease 0s;
  border: 1px solid #e4e4e4;
  background-color: #fff;
  box-shadow: 0 10px 20px -15px rgba(0, 0, 0, 0.2);
`

const Description = styled.p`
  color: #666d7a;
`

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0px;
  left: 0px;
`

const Project = ({ image, heading, description, path, forSlug }) => {
  return (
    <Container>
      <LinkWrapper to={`${path}${forSlug}`}>
        <ImgOverlay />
        <StyledImg fluid={image.childImageSharp.fluid}></StyledImg>
      </LinkWrapper>
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
    </Container>
  )
}
export default Project
