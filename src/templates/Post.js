import React from 'react';
import { graphql } from 'gatsby';
import Image from '../components/atoms/Image';
import Layout from '../components/organisms/Layout';

export default function Template( {
                                    data, // this prop will be injected by the GraphQL query below.
                                  } ) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <Image imgName={frontmatter.thumbnail.replace( '/images/uploads/', '' )}/>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

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