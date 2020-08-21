module.exports = {
  siteMetadata: {
    title: 'My Portfolio',
    author: 'Helmar Baechle',
    description: 'create with Gatsby blazing fast Apps',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/HelmarLogo.png', // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-130557103-21",
      },
    

    },
    'gatsby-plugin-sass',
  ],
}

