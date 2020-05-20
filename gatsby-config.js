require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Marco Valsecchi`,
    author: `Marco Valsecchi`,
    description: `Personal blog by Marco Valsecchi. `,
    siteUrl: `https://marcovalsecchi.it/`,
    social: {
      twitter: `valse`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-blogger',
      options: {
        apiKey: `${process.env.BLOGGER_API_KEY}`,
        blogId: `${process.env.BLOGGER_BLOG_ID}`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
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
        trackingId: `UA-3222309-15`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marco Valsecchi`,
        short_name: `Marco Valsecchi`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#008080`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-zeit-now',
    'gatsby-plugin-remove-serviceworker'
    //`gatsby-plugin-offline`,
  ],
}
