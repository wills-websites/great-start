import React from 'react';
import { INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import styled from 'styled-components';

const Holder = styled.div.attrs({
  className: 'rich-text-holder',
})`
  width: 100%;
  > :first-child { margin-top: 0; }
  > :last-child { margin-bottom: 0; }
`;

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: ( node, children ) =>
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer">{children}</a>,
  },
};

function RichTextConverter({ content }) {
  return <Holder>{content && renderRichText(content, options)}</Holder>
}

export default RichTextConverter;
