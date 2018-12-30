import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const LISTING_QUERY = graphql`
query BlogPostListing{
  allMarkdownRemark(limit: 5, sort:{
    order: DESC,
    fields: [frontmatter___date]
  }) {
    edges {
      node {
        excerpt
        frontmatter {
      		title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 1px;
  margin-bottom: 1rem;
  h2 {
    font-size: 1.5rem;
    font-family: Fjalla One;
  }
  p {
    font-size: 0.8rem;
    font-family: Noto Sans;
  }
  a {
    text-decoration: none;
  }
  .read-more {
    text-decoration: underline;
    color: purple;
  }
`;

const Listing = () => (
  <StaticQuery 
    query={LISTING_QUERY}
    render={({allMarkdownRemark}) => (
      allMarkdownRemark.edges.map(({node}) => (
        <Post key={node.frontmatter.slug}>
          <p>{node.frontmatter.date}</p>
          <Link to={`/posts/${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.excerpt}</p>
          <Link class="read-more" to={`/posts/${node.frontmatter.slug}`}>Full Article</Link>
        </Post>
      ))
    )}
  />
)

export default Listing