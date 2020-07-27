import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Holder = styled.div`
  display: flex;
  justify-content: center;
  ul {
    list-style: none;
    padding-left: 0;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        text-decoration: none;
        &[aria-current="page"] {
          text-decoration: underline;
        }
      }
    }
  }
`;

class Pagination extends Component {
  render() {

    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/posts/' : `/posts/${(currentPage - 1).toString()}`;
    const nextPage = `/posts/${(currentPage + 1).toString()}`;

    return (
      <Holder>
        <p>
          {!isFirst && (
            <Link to={prevPage} rel="prev">Newer</Link>
          )}
        </p>
        <ul>
          {Array.from( { length: numPages }, ( _, i ) => (
            <li key={`pagination-number${i + 1}`}>
              <Link to={`/posts/${i === 0 ? '' : i + 1}`}>
                {i + 1}
              </Link>
            </li>
          ) )}
        </ul>
        <p>
          {!isLast && (
            <Link to={nextPage} rel="next">Older</Link>
          )}
        </p>
      </Holder>
    )
  }
}

export default Pagination;
