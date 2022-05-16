import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import PropTypes from 'prop-types';

function Image({imgName}) {

  const data = useStaticQuery(graphql`
      query ImageQuery {
          allImageSharp {
              nodes {
                  resize {
                      originalName
                  }
                  gatsbyImageData(
                      width: 1200
                      placeholder: BLURRED
                      formats: [AUTO, WEBP]
                  )
              }
          }
      }
  `)

  const image = data.allImageSharp.nodes.find(
    node => node.resize.originalName === imgName.replace(/^.*[\\/]/, ""),
  );


  if (!image) {
    return null;
  }

  return <GatsbyImage
    alt="gatsby"
    layout="constrained"
    image={image.gatsbyImageData} />;
}

Image.propTypes = {
  imgName: PropTypes.string.isRequired,
};

export default Image;
