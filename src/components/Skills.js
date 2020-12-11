/** @format */

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Section from '../components/Section'

const SkillText = styled.div`
  margin-top: 8px;
  font: normal 600 11px/14px Inter, sans-serif;
`

const SkillCircle = styled.div`
  position: relative;
  display: flex;
  width: 120px;
  height: 120px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f2f3f5;
  text-align: center;
  cursor: pointer;
  flex-direction: column;
`

const SkillsRow = styled.div`
  display: flex;
  margin: -10px auto 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  grid-row: 3/4;
  grid-column-start: span 12;
`
const SkillImg = styled(Img)`
  width: 44px;
`

const Skills = () => {
  const filename = (url) => url.substring(url.lastIndexOf('/') + 1).split('.')[0]

  const data = useStaticQuery(graphql`
    query {
      pageContentJson(page: { eq: "about" }) {
        skillsHeader
        skillsDescription
      }

      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "skills" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 44, height: 44, quality: 100) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section
      sectionLabel={data.pageContentJson.skillsHeader}
      sectionHeader={data.pageContentJson.skillsDescription}
    >
      <SkillsRow>
        {data.allFile.edges.map((image, index) => (
          <SkillCircle key={index}>
            <SkillImg fixed={image.node.childImageSharp.fixed} />
            <SkillText>{filename(image.node.childImageSharp.fixed.src)}</SkillText>
          </SkillCircle>
        ))}
      </SkillsRow>
    </Section>
  )
}
export default Skills
