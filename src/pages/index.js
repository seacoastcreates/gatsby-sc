import React from 'react'
import Layout from '../components/layout'
import Listing from '../components/listing'
import Hero from '../components/hero'
import SEO from '../components/seo'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Seacoast Creative" />
    <Hero />
    <Listing />
  </Layout>
)

export default IndexPage
