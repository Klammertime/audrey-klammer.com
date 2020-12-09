/** @format */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Section from '../components/Section'

const DownloadsPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <Layout header={'Download'} location={location} pageDescription={'All PDF Downloads'}>
      <Section>
        <ul>
          {data.allFile.edges.map((file, index) => {
            return (
              <li key={`pdf-${index}`}>
                <a href={file.node.publicURL} download>
                  {file.node.name}
                </a>
              </li>
            )
          })}
        </ul>
      </Section>
    </Layout>
  )
}
export default DownloadsPage
