import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: {
          regex: "/blur-comp/"
        }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              src
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.file.childImageSharp.fluid} />}
  />
)

export default Hero