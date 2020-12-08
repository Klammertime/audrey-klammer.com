/** @format */

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/Project'
import Section from '../components/Section'

const WorkPage = ({ location, data }) => {
  const { pageHeader } = data.pageContentJson

  return (
    <Layout header={'Work'} location={location} pageDescription={pageHeader}>
      <SEO title="work" />
      <Section columns={true}>
        {data.allOtherJson.edges.map((val, index) => (
          <Project
            key={index}
            path={val.node.path}
            forSlug={val.node.forSlug}
            title={val.node.title}
            description={val.node.blurb}
            image={val.node.fields.otherImage}
          />
        ))}
      </Section>
    </Layout>
  )
}
export default WorkPage

export const query = graphql`
  {
    pageContentJson(page: { eq: "work" }) {
      pageHeader
    }
    allOtherJson {
      edges {
        node {
          id
          blurb
          description2
          title
          path
          forSlug
          fields {
            otherImage {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  maxHeight: 1000
                  quality: 70
                  fit: COVER
                  cropFocus: NORTHEAST
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            otherImage2 {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 1000, quality: 70, fit: COVER, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            otherImage3 {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  maxHeight: 1000
                  quality: 70
                  fit: COVER
                  cropFocus: NORTHWEST
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
