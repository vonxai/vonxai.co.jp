import React from "react";

export const Head = ({ location, params, data, pageContext }) => {
  const { title, subtitle, description, siteUrl } =
    pageContext.site.siteMetadata;

  const seo = {
    title: subtitle !== undefined ? `${subtitle} - ${title}` : title,
    description: description,
    image: `${siteUrl}/assets/images/share-image.webp`,
    url: `${siteUrl}${location.pathname}`,
  };

  return (
    <>
      <html lang="ja" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <link
        rel="icon"
        type="image/png"
        href={`/assets/images/logo.svg`}
        sizes="16x16"
      />
    </>
  );
};
