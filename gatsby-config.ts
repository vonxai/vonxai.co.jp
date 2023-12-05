import type { GatsbyConfig } from "gatsby";

const siteMetadata = {
  title: "vonxai inc.",
  description: "vonxai inc.のコーポレートサイトです",
  siteUrl: "https://www.vonxai.co.jp/",
};

const config: GatsbyConfig = {
  siteMetadata,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W27JGZF",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "gatsby-route-change",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/assets/`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap",
        excludes: [],
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => siteMetadata.siteUrl,
        resolvePages: ({ allSitePage }) => {
          return allSitePage.nodes.map((node) => node);
        },
        filterPages: (page, excludedRoute, { minimatch }) => {
          return minimatch(page.path, excludedRoute);
        },
        serialize: ({ path, lastmod }) => {
          return {
            url: path,
            lastmod: lastmod,
          };
        },
      },
    },
  ],
};

export default config;
