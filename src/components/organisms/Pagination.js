import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Holder = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  align-items: center;
  p:last-child { text-align: right; }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding-left: 0;
    li { margin: 0 0.5rem; }
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