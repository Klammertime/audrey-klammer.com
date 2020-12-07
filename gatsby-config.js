/** @format */

module.exports = {
  siteMetadata: {
    title: `Audrey Klammer`,
    author: {
      name: `Audrey Klammer`,
      summary: `I am passionate about web development and building useful things.`,
    },
    heading: `My name is Audrey Klammer. I'm a UI Engineer based in San Francisco.`,
    description: `I develop modern apps using React, CSS3 and ES6+.`,
    siteUrl: `https://audreyklammer/`,
    social: {
      twitter: `https://twitter.com/Klammertime`,
      github: `https://github.com/Klammertime`,
      linkedin: `https://www.linkedin.com/in/audreyklammer/`,
    },
  },

  // there are source plugins and transformer plugins
  // 1) new nodes are added to Gatsby by "source" plugins
  // for example, filesystem source plugin turns files on disk to
  // into file nodes
  // 2) transformer plugins create nodes by transforming source
  // nodes into new types of nodes
  // for example, remark (markdown library) transformer plugin
  // looks for new nodes that are created with a mediaType of
  // text/markdown and then transforms these nodes into MarkdownRemark
  // nodes with an html field.

  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/portfolio`,
        name: `portfolioImages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/reviews`,
        name: `reviews`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/skills`,
        name: `skills`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          //from netlify starter
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2048,
            },
          },
          //from netlify starter
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Audrey Klammer`,
        short_name: `AudreyKlammer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/a.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
