# Great Start
A starter template for Gatbsy and Netlify CMS web builds by Will McLean

## Includes
- Gatsby
- Netlify CMS
- Atomic design structure
- Will's prototype styles

## Start a site
1. Download Zip of the repo and copy contents to your new site directory
1. `npm install`
1. `git init`
1. Push to github repo
1. Link Netlify site to github repo for deployment
1. Setup Netlify Identity within Settings > Identity. 
	1. Choose open or invite for new users
	1. Add any external providers you want to allow people to log in with
	1. Enable Git Gateway
	1. If you have set invite for new users then invite yourself within the Identity tab and follow link in the email you get sent
	1. If you have set to open the visit siteurl.com/admin to login
1. Start deving with `gatsby develop`

## Join a site
1. `npm install`
1. Start deving with `gatsby develop`

## Switch from Netlify CMS to Contentful
1. Create .env.development and .env.production files with CONTENTFUL_ACCESS_TOKEN=<your_access_token_here>. Add files to gitignore.
1. `npm install --save gatsby-source-contentful` and configure the plugin as shown [here](https://www.gatsbyjs.org/packages/gatsby-source-contentful/)
1. Update your blog and listing pages specified in gatsby-node.js to use allContentfulYourContentType query
1. `npm install --save @contentful/rich-text-react-renderer`
1. Update your templates (PostLink PostList, Pagination, SinglePagination, Post etc.) to get correct content.
1. Remove netlify cms files (static/admin, posts/, images/uploads/ etc.)
1. Uninstall and remove form plugin config file the gatsby-plugin-netlify-cms plugin and the previous gatsby-source-filesystem posts configuration

## Deployment
Master branch set to auto deploy to <insert url here>

## Things to remember
- Try something new
- Keep it simple
- Done is better than perfect
