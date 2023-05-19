// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */
//
// const path = require("path");
//
// exports.createPages = ({actions, graphql}) => {
//   const {createPage} = actions;
//
//   return graphql(`
//       {
//           projects: allPrismicProject(sort: {fields: first_publication_date, order: DESC}) {
//               nodes {
//                   uid
//                   id
//               }
//           }
//       }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }
//
//     // Create project list pages
//     const projects = result.data.projects.nodes;
//     const projectsPerPage = 20;
//     const numProjectPages = Math.ceil(projects.length / projectsPerPage);
//     Array.from({length: numProjectPages}).forEach((_, i) => {
//       createPage({
//         path: i === 0 ? `/projects/` : `/projects/${i + 1}`,
//         component: path.resolve('./src/templates/ProjectListPage.js'),
//         context: {
//           limit: projectsPerPage,
//           skip: i * projectsPerPage,
//           numProjectPages,
//           currentPage: i + 1,
//         },
//       })
//     });
//
//   })
// };
