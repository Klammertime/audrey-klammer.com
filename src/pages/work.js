import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"
import Section from "../components/Section"

const WorkPage = ({ location, data }) => {
  const { page, pageHeader } = data.pageContentJson

  return (
    <Layout header={page} location={location} pageDescription={pageHeader}>
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
      page
    }
    allOtherJson {
      edges {
        node {
          id
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
                  quality: 100
                  fit: COVER
                  cropFocus: NORTHWEST
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            otherImage2 {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  maxHeight: 1000
                  quality: 100
                  fit: COVER
                  cropFocus: NORTHWEST
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            otherImage3 {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  maxHeight: 1000
                  quality: 100
                  fit: COVER
                  cropFocus: NORTHWEST
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
