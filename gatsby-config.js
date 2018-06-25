module.exports = {
  siteMetadata: {
    siteName: `Using Typescript Example`,
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorJson`
  },

  plugins: [
    "gatsby-plugin-typescript",
    // "gatsby-plugin-offline",

    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "content",
    //     path: `${__dirname}/data`
    //   }
    // },

    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 690,
    //           backgroundColor: `#f7f0eb`
    //         }
    //       },
    //       `gatsby-remark-prismjs`,
    //       `gatsby-remark-copy-linked-files`,
    //       `gatsby-remark-autolink-headers`
    //     ]
    //   }
    // },
  ],
}
