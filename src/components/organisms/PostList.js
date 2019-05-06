import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PostLink from '../molecules/PostLink';
import styled from 'styled-components';

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    list-style: none;
    padding-left: 0;
    width: 100%;
    @media(${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
    }
`;

class PostList extends Component {
  render() {
    return (
      <div className="PostList">
        <p>This is the post list.</p>
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
                <PostLink key={edge.node.id} post={edge.node}/>
                ) )}
              </List>
            )
          }}/>
      </div>
    )
  }
}

export default PostList;