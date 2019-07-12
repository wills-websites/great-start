import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/Layout';
import styled from 'styled-components';
import SEO from '../components/molecules/SEO';
import PostLink from '../components/molecules/PostLink';
import Pagination from '../components/organisms/Pagination';

const Holder = styled.ul`
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

class PostListPage extends Component {

  render() {

    return (
      <Layout>
        <SEO title="Posts"/>
        <article>
          <h1>Posts</h1>
          <Holder>
            {this.props.data.allMarkdownRemark.edges.map( edge => (
              <PostLink key={edge.node.id} post={edge.node}/>
            ) )}
          </Holder>
          <Pagination pageContext={this.props.pageContext}/>
        </article>
      </Layout>
    )
  }
}

export default PostListPage;

export const postListPageQuery = graphql`
    query postListPageQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip
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
`;