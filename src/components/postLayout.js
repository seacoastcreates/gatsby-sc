import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from './layout'
import { Spring } from 'react-spring'
import Img from 'gatsby-image'


// Static Query Used Anywhere, doesn't accept variables, can't use context
// Page Query, must be used on page


export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;

    return (
      <div>
        <Layout location={location}>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML = {{
            __html: markdownRemark.html
          }}/>
        </Layout>
      </div>
    )
  }
}

export const query = graphql`
  query PostQuery( $slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;

postLayout.defaultProps = {
  location: {},
}