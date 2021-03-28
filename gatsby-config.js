require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Shaurya Singhal Showcase`,
    description: `Shaurya Personal Portfolio to showcase shaurya and his work at one place from various places.`,
    url: `https://shaurya.now.sh`, // No trailing slash!
    image: `src/static/shaurya.png`,
    twitterUsername: '@jugshaurya',
    githubUsername: '@jugshaurya',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-151200931-2',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shaurya Singhal`,
        short_name: `Shaurya Showcase`,
        start_url: `/`,
        background_color: `#15171a`,
        theme_color: `#15171a`,
        display: `standalone`,
        icon: `src/static/shaurya.png`, // This path is relative to the root of the site.
      },
    },
    // if u want to remove offline feature later please see this:
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/?=offline#remove
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        // need to look out whether it caches inpage section or not else remove #stats
        // removing for now - add back later
        // precachePages: [`/blogs/*`, `/#stats`],
        precachePages: [`/#stats`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // plugin to access github
    // {
    //   resolve: `gatsby-source-git`,
    //   options: {
    //     name: `Machine-Learning`,
    //     remote: `https://github.com/jugshaurya/Machine-Learning`,
    //     branch: `master`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-git`,
    //   options: {
    //     name: `learn-python`,
    //     remote: `https://github.com/jugshaurya/learn-python`,
    //     branch: `master`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-medium-feed',
    //   options: {
    //     userName: '@shauryasinghal84', // Medium user name
    //     name: 'MediumFeed', // GraphQL query AllMediumFeed
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
};
