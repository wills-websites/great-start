import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

class Image extends Component {
  render() {
    if( this.props.imgName.includes('ucarecdn') ) {
      return (
        <img alt="Dummy alt text"
          src={`${this.props.imgName}-/resize/1000x/fallback.jpg`}
          srcSet={`${this.props.imgName}-/resize/640x/640.jpg 640w,
               ${this.props.imgName}-/resize/1000x/-/quality/lighter/1000.jpg 1000w,
               ${this.props.imgName}-/resize/1600x/-/quality/lighter/1600.jpg 1600w,`}
          sizes={this.props.sizes}/>
      );
    } else {
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
                    formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        `}
          render={data => {
            const image = data.allImageSharp.nodes.find(
              node => node.fluid.originalName === this.props.imgName.replace( /^.*[\\/]/, '' )
            );
            if ( !image ) {
              return null
            }
            return <GatsbyImage
              alt="gatsby"
              layout="constrained"
              image={image.gatsbyImageData}/>
          }}
        />
      )
    }
  }
}

export default Image;
