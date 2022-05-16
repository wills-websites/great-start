import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import PropTypes from "prop-types";
import Container from "../atoms/Container";

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
`

function Pagination({currentPage, totalPages, baseSlug}) {
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages
  const prevPage =
    currentPage - 1 === 1
      ? `/${baseSlug}`
      : `/${baseSlug}${(currentPage - 1).toString()}`
  const nextPage = `/${baseSlug}${(currentPage + 1).toString()}`

  return (
    <Container>
      <Holder>
        <p>
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              Newer
            </Link>
          )}
        </p>
        <p>
          {!isLast && totalPages > 1 && (
            <Link to={nextPage} rel="next">
              Older
            </Link>
          )}
        </p>
      </Holder>
    </Container>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  baseSlug: PropTypes.string,
};

Pagination.defaultProps = {
  baseSlug: '',
};

export default Pagination;
