import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';

const Holder = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    display: block;
    margin: 2rem 0;
  }
  > :first-child { margin-top: 0; }
  > :last-child { margin-bottom: 0; }
`;

class RichTextConverter extends Component {
  render() {
    const { content } = this.props;

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          // console.log(node.data);
          let { title, file } = node.data.target.fields;
          let titleString = title['en-AU'] || title;
          let url = file.url || file['en-AU'].url;
          let type = file.contentType || file['en-AU'].contentType;
          if(type.includes('video')) {
            return <video controls>
              <source src={url} type={type}/>
            </video>
          } else {
            return <img src={url + '?w=800'} alt={titleString}/>
          }
        }
      },
      renderText: text => {
        return text.split('\n').reduce((children, textSegment, index) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
      },
    };

    return (
      <Holder>{documentToReactComponents(content, options)}</Holder>
    )
  }
}

RichTextConverter.propTypes = {
  content: PropTypes.object
};

export default RichTextConverter;
