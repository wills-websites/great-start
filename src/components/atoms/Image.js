import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

class Image extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allImageSharp {
              nodes {
                fluid {
                    originalName
                    originalImg
                }
                gatsbyImageData(
                    width: 1200
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                )
              }
            }
          }
        `}
        render={data => {
          const image = data.allImageSharp.nodes.find(
            node => node.fluid.originalName === this.props.imgName.replace( /^.*[\\/]/, "" ),
          );
          if ( !image ) {
            return null;
          }
          return <GatsbyImage
            alt="gatsby"
            layout="constrained"
            image={image.gatsbyImageData}/>;
        }}
      />
    );
  }
}

export default Image;
