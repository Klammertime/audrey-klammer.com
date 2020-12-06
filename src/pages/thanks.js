import React from "react"
import Layout from "../components/layout"

const ThanksPage = ({ location }) => {
  return (
    <Layout header={"Thank you"} location={location}>
      <h1>Thank you!</h1>
      <p>This is a custom thank you page for form submissions</p>
    </Layout>
  )
}
export default ThanksPage
