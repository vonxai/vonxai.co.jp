const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const site = await graphql(`
    query SEO {
      site {
        siteMetadata {
          title: title
          description: description
          siteUrl: siteUrl
        }
      }
    }
  `)

  createPage({
    path: `/`,
    component: path.resolve('./src/components/templates/Home.tsx'),
    context: {
      site: site.data.site,
    },
  })

  createPage({
    path: `/company`,
    component: path.resolve('./src/components/templates/Company.tsx'),
    context: {
      site: site.data.site,
    },
  })

  createPage({
    path: `/business`,
    component: path.resolve('./src/components/templates/Business.tsx'),
    context: {
      site: site.data.site,
    },
  })

  createPage({
    path: `/contact`,
    component: path.resolve('./src/components/templates/Contact.tsx'),
    context: {
      site: site.data.site,
    },
  })
}
