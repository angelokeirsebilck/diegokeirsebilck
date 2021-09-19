require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: false,
    PRESERVE_WEBPACK_CACHE: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
    FUNCTIONS: false,
  },
  siteMetadata: {
    title: `Elektro Diego - Diego Keirsebilck - Voor al je algemene elektriciteitswerken`,
    description: `Elektro Diego - Diego Keirsebilck - Voor al je algemene elektriciteitswerken`,
    author: `@AngeloKeirsebilck`,
    twitterUsername: '@AngeloKbilck',
    siteUrl: 'https://elektro-diego.be',
    image: '/elektro-diego-logo-black.jpg',
},
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://elektro-diego.be',
        sitemap: 'https://elektro-diego.be/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elektro Diego Website`,
        short_name: `Elektro Diego Website`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#fead1b`,
        display: `minimal-ui`,
        icon: `src/images/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Red Hat Display"],
        },
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_URL,
        singleTypes: ["homebanner"],
        queryLimit: 1000,
      },
    },
    "gatsby-plugin-postcss",
  ],
}
