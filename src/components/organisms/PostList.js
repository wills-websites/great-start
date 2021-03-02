import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { convertToSlug } from "../../utils/helpers"

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`

class PostList extends Component {
  render() {
    return (
      <div>
        <h2>A list of posts:</h2>
        <StaticQuery
          query={graphql`
            query PostListQuery {
              allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
              ) {
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      date
                      thumbnail
                    }
                  }
                }
              }
            }
          `}
          render={(data) => {
            return (
              <List>
                {data.allMarkdownRemark.edges.map((edge) => (
                  <li key={edge.node.id}>
                    <Link
                      to={"/post" + convertToSlug(edge.node.frontmatter.title)}
                    >
                      {edge.node.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </List>
            )
          }}
        />
      </div>
    )
  }
}

export default PostList
