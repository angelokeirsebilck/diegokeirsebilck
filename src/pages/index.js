import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const {
    strapiHomebanner: { Title },
  } = data

  return (
    <Layout>
      <h1>{Title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query HomeBanner {
    strapiHomebanner {
      Title
    }
  }
`

export default IndexPage
