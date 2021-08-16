import React from 'react';
import PropTypes from "prop-types";
import {RichText} from "prismic-reactjs";
import linkResolver from "../../utils/linkResolver";
import { Link } from 'gatsby';

const GatsbyLink = (type, element, content, children, index) => {
  if (element.data.link_type === 'Document') {
    return (
      <Link to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </Link>
    )
  }
  return null
}

function PrismicRichText({render}) {
  return (
    <RichText
      render={render}
      serializeHyperlink={GatsbyLink}/>
  )
}

PrismicRichText.propTypes = {
  render: PropTypes.array.isRequired,
};

export default PrismicRichText;