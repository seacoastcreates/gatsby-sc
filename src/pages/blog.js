import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Listing from '../components/listing'
import SEO from '../components/seo'

const Blog = ({location}) => (
  <Layout location={location}>
    <SEO title="Seacoast Creative" />
    
    <Listing />
  </Layout>
)

export default Blog
