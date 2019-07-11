import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
              edges {
                node {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
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
      )
    }
  }
}

export default Image;