/** @format */

import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const StyledSection = styled.section`
  position: relative;
  z-index: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  width: 100%;
  margin: 0 auto;
  background-color: transparent;
  max-width: 1200px;
`

const MainGrid = styled.div`
  width: 100%;
  perspective: 2000px;
  display: grid;
  grid: auto-flow auto / repeat(12, 1fr [col-start]);
  margin: 0 auto;
`
const ProjectImagesWrapper = styled.div`
  display: block;
  grid-column: 1/9;
  margin: 20px 0 14px 0;
  padding: 0 10px;
  @media (max-width: 990px) {
    padding: 0 20px;
  }
`

const ProjectImage = styled(Img)`
  display: block;
  margin: 14px 0 24px 0;
`

const Sidebar = styled.div`
  grid-column: 10/13;
  padding: 0 10px;
  @media (max-width: 990px) {
    padding: 0 20px;
  }
`

const Heading = styled.h2`
  grid-column: 1/2;
  margin-bottom: 16px;
  font-size: 40px;
  line-height: 48px;
  font-weight: 700;
`
const Description = styled.p`
  color: #777;
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 24px;
`

const Item = styled.div`
  flex-direction: column;
  align-items: start;
  display: flex;
  padding: 12px 0;
  flex: 0 auto;
  font-size: 15px;
  line-height: 24px;
  grid-column: 1/2;
  border-bottom: 1px solid #e4e4e4;
`

const ItemTitle = styled.p`
  color: #777;
  font-weight: 500;
  margin-right: 8px;
  margin-bottom: 5px;
  font-weight: 500;
`
const ItemText = styled.div``
const AlteredMainGrid = styled.div`
  width: 100%;
  perspective: 2000px;
  display: grid;
  grid: auto-flow auto / 1fr;
  grid-gap: 0 30px;
  position: sticky;
  top: 100px;
  display: block;
  padding: 0;
  flex: 1;
  text-align: left;
`

const ImageCaption = styled.p`
  margin: 16px 0 40px 0;
  font-size: 17px;
  line-height: 28px;
`

const ImageCaptionHeading = styled.h3`
  margin: 50px 0 16px 0;
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
`

const StyledLink = styled.a`
  font-weight: 500;
  color: #f83f5a;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`
const PortfolioPageOne = ({ location, data }) => {
  let { otherImage, otherImage2, otherImage3 } = data.otherJson.fields
  let {
    description,
    description2,
    description3,
    content,
    title,
    technology,
    link,
    role,
  } = data.otherJson
  const { pageHeader } = data.pageContentJson
  return (
    <Layout location={location} pageDescription={pageHeader} templateHeader={false} header={'Work'}>
      <SEO title="work" />
      <StyledSection>
        <MainGrid>
          <ProjectImagesWrapper>
            <ProjectImage fluid={otherImage.childImageSharp.fluid} />
            <ImageCaptionHeading>Project</ImageCaptionHeading>
            <ImageCaption>{description}</ImageCaption>

            <ProjectImage fluid={otherImage2.childImageSharp.fluid} />
            {description2 && <ImageCaptionHeading>Technology</ImageCaptionHeading>}
            {description2 && <ImageCaption>{description2}</ImageCaption>}

            <ProjectImage fluid={otherImage3.childImageSharp.fluid} />
            {description3 && <ImageCaptionHeading>Result</ImageCaptionHeading>}
            {description3 && <ImageCaption>{description3}</ImageCaption>}
          </ProjectImagesWrapper>
          <Sidebar>
            <AlteredMainGrid>
              <Heading>{title}</Heading>
              <Description>{content}</Description>
              <Item>
                <ItemTitle>Technology</ItemTitle>
                <ItemText> {technology}</ItemText>
              </Item>
              {role && (
                <Item>
                  <ItemTitle>Role</ItemTitle>
                  <ItemText> {role}</ItemText>
                </Item>
              )}
              <Item>
                <ItemText>
                  <StyledLink href={link}>View Website</StyledLink>
                </ItemText>
              </Item>
            </AlteredMainGrid>
          </Sidebar>
        </MainGrid>
      </StyledSection>
    </Layout>
  )
}
export default PortfolioPageOne

export const pageQuery = graphql`
  query PortfolioPost($id: String!) {
    pageContentJson(page: { eq: "work" }) {
      pageHeader
      page
    }
    otherJson(id: { eq: $id }) {
      id
      content
      title
      technology
      description
      description2
      description3
      link
      role
      fields {
        otherImage {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        otherImage2 {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        otherImage3 {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
