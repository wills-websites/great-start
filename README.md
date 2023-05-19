# Great Start

A starter template for Gatbsy and Prismic builds for Public Websites and Supermarket.

## Start a site

1. Create a private repo using this as a template when prompted in the willswebsites organisation
2. Clone the repo to your local machine
1. Install dependencies by running `npm install` inside the project directory
4. Update project title and description in readme, package.json and gatsby-config.js
5. Add an initial commit and push to github
7. Start deving with `gatsby develop`
6. Link Netlify site to github repo for deployment

## Join the site

1. Clone the site `git clone ...`
1. Install dependencies by running `npm install` inside the project directory
1. Create a .env.development file in the root of the repo to hold the any project variables, like api keys etc. (see https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/)
1. Start deving with `gatsby develop`

## Deployment

Master branch set to auto deploy to <insert url here>

## Prismic

To get prismic working with this template:

1. Create a new prismic repo and set up a content type (eg. Projects)
2. Set up previews in your prismic repo settings (https://prismic.io/docs/previews-gatsby)
3. Add your repo name, api key and content type access token to a .env.development file
4. Uncomment the prismic plugins in gatsby-config.js
5. Uncomment the prismic previews setup in the gatsby-ssr.js and gatsby-browser.js files
6. Uncomment the prismic queries and other related bits in the templates/ProjectListPage.js file
7. Rename the example projects/ExamplePrismicContentTypeFile.js file to match your content type (eg. {PrismicProject.uid}.js)
8. Check your link providers, queries and templates are all updated with relevant info to you prismic repo content types.