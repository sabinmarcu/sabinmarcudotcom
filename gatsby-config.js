/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config();
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    title: 'Sabin Marcu',
    description: 'Personal website, showcase & CV',
    author: '@sabinmarcu',
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato'],
        },
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'gcms',
        fieldName: 'gcms',
        url: process.env.GRAPHCMS_URL,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sabin Marcu',
        short_name: 'sabinmarcu',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/Logo.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        jsxPragma: 'React',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
