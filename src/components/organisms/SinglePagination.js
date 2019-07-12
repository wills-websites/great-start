import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { convertToSlug } from '../../utils/helpers';

const Holder = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;  
`;

class SinglePagination extends Component {

  render() {
    const { prev, next } = this.props.pageContext;
    return (
      <Holder>
        <p>
          {prev && (
            <Link to={`/post/${convertToSlug( prev.node.frontmatter.title )}`} rel="prev">Newer</Link>
          )}
        </p>
        <p>
          {next && (
            <Link to={`/post/${convertToSlug( next.node.frontmatter.title )}`} rel="next">Older</Link>
          )}
        </p>
      </Holder>
    )
  }
}

export default SinglePagination;