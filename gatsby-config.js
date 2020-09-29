module.exports = {
  siteMetadata: {
    title: 'Gatsby Instagram test',
    description: 'Website to test Gatsby and Instagram'
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: '25573873494'
      }
    }
  ],
}