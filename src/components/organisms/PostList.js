import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding-left: 0;
`;

class PostList extends Component {
  render() {
    return (
      <div className="PostList">
        <p>This is a list of posts.</p>
        <StaticQuery
          query={graphql`
            query PostListQuery {
            allMarkdownRemark(
              sort: {
                fields: [frontmatter___date]
                order: DESC
              }
            ){
              edges {
                node{
                  id
                  frontmatter {
                    title
                    date
                    path
                    thumbnail
                  }
                }
              }
            }
          }`}
          render={data => {
            return (
              <List>
                {data.allMarkdownRemark.edges.map( edge => (
                  <li key={edge.node.id}>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </li>
                ) )}
              </List>
            )
          }}/>
      </div>
    )
  }
}

export default PostList;