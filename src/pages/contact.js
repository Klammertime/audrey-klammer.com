import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ContactForm from "../components/ContactForm"
import Section from "../components/Section"

const ContactWrapper = styled.div`
  grid-column: 1/13;
`
const ContactPage = ({ location, data }) => {
  const { pageHeader, formDescription, formHeader, page } = data.pageContentJson

  return (
    <Layout header={page} location={location} pageDescription={pageHeader}>
      <SEO title="contact" />
      <Section>
        <ContactWrapper>
          <ContactForm
            formDescription={formDescription}
            formHeader={formHeader}
          />
        </ContactWrapper>
      </Section>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  {
    pageContentJson(page: { eq: "contact" }) {
      page
      pageHeader
      formDescription
      formHeader
    }
  }
`
