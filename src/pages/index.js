/** @format */

import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Section from '../components/Section'

const HomePage = ({ data, location, heading, description }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} description={description} heading={heading}>
      <SEO title="All posts" />
      <Section columns={true}>
        {data.allOtherJson.edges.map((val, index) => (
          <Project
            key={index}
            path={val.node.path}
            forSlug={val.node.forSlug}
            heading={val.node.title}
            description={val.node.blurb}
            image={val.node.fields.otherImage}
          />
        ))}
      </Section>
      <Skills />
    </Layout>
  )
}

export default HomePage
export const query = graphql`
  {
    allOtherJson {
      edges {
        node {
          id
          description2
          title
          path
          forSlug
          blurb
          fields {
            otherImage {
              childImageSharp {
                fluid(
                  maxWidth: 500
                  maxHeight: 500
                  quality: 70
                  fit: COVER
                  cropFocus: NORTHEAST
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        heading
      }
    }
  }
`
