module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [    
    {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Dad Jokes`,
      short_name: `Dad Jokes`,
      start_url: `/`,
      background_color: `#000`,
      theme_color: `#000`,
      display: `standalone`,
      icon: `src/images/Dad jokes icon.png`
    },
  },
    "gatsby-plugin-offline",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
