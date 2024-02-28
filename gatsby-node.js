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
    path: `/404`,
    component: path.resolve("./src/components/templates/404.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "404 Not Found." },
        },
      },
    },
  });

  createPage({
    path: `/company`,
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
    path: `/mission`,
    component: path.resolve("./src/components/templates/Mission.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "ミッション・バリュー" },
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

  createPage({
    path: `/security`,
    component: path.resolve("./src/components/templates/Security.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "情報セキュリティ基本方針" },
        },
      },
    },
  });

  createPage({
    path: `/privacy`,
    component: path.resolve("./src/components/templates/Privacy.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "プライバシーポリシー" },
        },
      },
    },
  });
};
