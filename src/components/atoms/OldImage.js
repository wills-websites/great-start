import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

class Image extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const image = data.allImageSharp.edges.find(
            edge => edge.node.fluid.originalName === this.props.imgName.replace( /^.*[\\/]/, '' )
          );
          if ( !image ) {
            return null
          }
          return <Img fluid={image.node.fluid}/>
        }}
      />
    );
  }
}

export default Image;
