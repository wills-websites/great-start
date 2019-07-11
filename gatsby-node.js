/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/Post.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // Create post pages
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {}, // additional data can be passed via context
      })
    });

    // Create post list pages
    const posts = result.data.allMarkdownRemark.edges;
    const postsPerPage = 6;
    const numPages = Math.ceil( posts.length / postsPerPage );
    Array.from( { length: numPages } ).forEach( ( _, i ) => {
      createPage( {
        path: i === 0 ? `/posts/` : `/posts/${i + 1}`,
        component: path.resolve( './src/templates/PostListPage.js' ),
        context: { limit: postsPerPage, skip: i * postsPerPage, numPages, currentPage: i + 1, },
      } )
    } )

  })
};