require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Duc Pham Portfolio`,
    siteTitleAlt: `Duc Pham Portfolio`,
    siteHeadline: `Duc Pham Portfolio`,
    siteUrl: `https://duc-portfolio.netlify.app`,
    siteImage: `/banner.png`,
    siteDescription: `Hi, I'm Duc Pham - a highly adaptable Full-Stack Developer based in Helsinki, Finland. I love reaching the completion stages of all tasks with a keen eye for detail.`,
    siteLanguage: `en`,
    author: `Duc Pham`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Duc Pham Portfolio`,
        short_name: `Duc Pham`,
        description: `Hi, I'm Duc Pham - a highly adaptable Full-Stack Developer based in Helsinki, Finland. I love reaching the completion stages of all tasks with a keen eye for detail.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icon: `static/d-logo.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-177054356-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
