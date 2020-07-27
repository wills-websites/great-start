import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Image from '../components/atoms/Image';
import SinglePagination from '../components/organisms/SinglePagination';
import Container from '../components/atoms/Container';

class Post extends Component {
  render() {
    const { markdownRemark } = this.props.data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
      <Container>
        <div>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <Image imgName={frontmatter.thumbnail.replace( '/images/uploads/', '' )}/>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          <SinglePagination pageContext={this.props.pageContext}/>
        </div>
      </Container>
    )
  }
}

export default Post;

export const pageQuery = graphql`
    query($title: String!) {
        markdownRemark(frontmatter: { title: { eq: $title } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                thumbnail
            }
        }
    }
`;
