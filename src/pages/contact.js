/** @format */

import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm'
import Section from '../components/Section'

const ContactWrapper = styled.div`
  grid-column: 2/12;
`
const ContactPage = ({ location, data }) => {
  const { pageHeader, formDescription, formHeader } = data.pageContentJson

  return (
    <Layout header={'Contact'} location={location} pageDescription={pageHeader}>
      <SEO title="contact" />
      <Section>
        <ContactWrapper>
          <ContactForm formDescription={formDescription} formHeader={formHeader} />
        </ContactWrapper>
      </Section>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  {
    pageContentJson(page: { eq: "contact" }) {
      pageHeader
      formDescription
      formHeader
    }
  }
`
