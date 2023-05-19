// import * as React from 'react'
// import {
//   PrismicPreviewProvider,
//   componentResolverFromMap,
// } from 'gatsby-plugin-prismic-previews'
//
// import linkResolver from './src/utils/linkResolver'
// import ProjectsTemplate from './src/pages/projects/{PrismicProject.uid}'
//
// export const wrapRootElement = ({ element }) => (
//   <PrismicPreviewProvider
//     repositoryConfigs={[
//       {
//         repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
//         linkResolver,
//         componentResolver: componentResolverFromMap({
//           'projects': ProjectsTemplate,
//         }),
//       },
//     ]}
//   >
//     {element}
//   </PrismicPreviewProvider>
// )