/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/Post.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // Create post pages
    result.data.allMarkdownRemark.edges.forEach(({ node }, i, array) => {
      createPage({
        path:
          "/post/" +
          node.frontmatter.title
            .toLowerCase()
            .replace(/[^\w ]+/g, "")
            .replace(/ +/g, "-"),
        component: postTemplate,
        context: {
          title: node.frontmatter.title,
          next: array[i + 1],
          prev: array[i - 1],
        },
      })
    })

    // Create post list pages
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/posts/` : `/posts/${i + 1}`,
        component: path.resolve("./src/templates/PostListPage.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}

// Example graphQL schema
// https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/

// exports.sourceNodes = ({ actions }) => {
//   const { createTypes } = actions;
//   const typeDefs = `
//     type ContentfulNews implements Node {
//       images: [ContentfulAsset]
//     }
//   `;
//   createTypes(typeDefs)
// };
