const path = require("path");

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
  `);
  const meta = site.data.site.siteMetadata;

  createPage({
    path: `/`,
    component: path.resolve("./src/components/templates/Home.tsx"),
    context: {
      site: site.data.site,
    },
  });

  createPage({
    path: `/about`,
    component: path.resolve("./src/components/templates/Company.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "会社概要" },
        },
      },
    },
  });

  createPage({
    path: `/service`,
    component: path.resolve("./src/components/templates/Business.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "事業概要" },
        },
      },
    },
  });

  createPage({
    path: `/contact`,
    component: path.resolve("./src/components/templates/Contact.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "お問い合わせ" },
        },
      },
    },
  });
};
