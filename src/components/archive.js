import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort:{
    order: DESC,
    fields: [frontmatter___date]
    }) {
      edges {
        node {
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

const Aside = styled.aside`
  h3 {
    font-family: 'Noto Sans';
    text-transform: uppercase;
    font-size: 0.1.25rem;
    line-height: 1rem;
    font-weight: 400;
    text-transform: smallcaps;
    letter-spacing: 1.1px;
  }
`;

const ArchiveList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    font-family: Noto Sans;
    text-transform: uppercase;
    font-size: 0.85rem;
    line-height: 1rem;
  }
  a {
    text-decoration: none;
  }
`;

const Archive = () => (
  <StaticQuery
    query={ POST_ARCHIVE_QUERY }
    render={({allMarkdownRemark}) => (
      <>
        <Aside>
          <h3>Archive</h3>
          {allMarkdownRemark.edges.map (edge => (
          <ArchiveList>
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts/${edge.node.frontmatter.slug}`}>        
                {edge.node.frontmatter.title}
              </Link>
            </li> 
          </ArchiveList>
          ))}
        </Aside>
      </>
    )}
  />
)


export default Archive
