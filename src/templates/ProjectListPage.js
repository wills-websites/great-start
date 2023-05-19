import React from 'react';
import Seo from '../components/molecules/Seo';
// import {graphql, Link} from 'gatsby';
import styled from 'styled-components';
import Container from '../components/atoms/Container';


const Holder = styled.article`
`;


function ProjectListPage({data}) {
  // const posts = data.allPrismicProject.nodes;
  return (
    <Holder>
      <Seo title="Projects" />
      <h1>Projects</h1>
      <Container>
        <ul>
          {/*{posts && posts.map(post =>*/}
          {/*  <li key={post.id}>*/}
          {/*    <p><Link to={`/projects/${post.uid}`}>{post.data.title.text}</Link></p>*/}
          {/*  </li>*/}
          {/*)}*/}
        </ul>
      </Container>
    </Holder>
  )
}

export default ProjectListPage

// export const projectListPageQuery = graphql`
//     query projectListPageQuery($skip: Int!, $limit: Int!) {
//         allPrismicProject(
//             limit: $limit
//             skip: $skip
//             sort: {first_publication_date: DESC}
//         ) {
//             nodes {
//                 uid
//                 data {
//                     title {
//                         text
//                     }
//                 }
//             }
//         }
//     }
// `;
