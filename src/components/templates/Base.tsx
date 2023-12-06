import React from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

const Base = ({ pageContext, children, className = "" }) => {
  return (
    <main className="container mx-auto max-w-full m-0 bg-white">
      <Header />
      <article className={`${className} mx-auto max-w-6xl my-10 px-2 lg:my-4`}>
        <h1 className="text-4xl font-bold lg:text-xl">
          {pageContext?.site?.siteMetadata?.subtitle !== undefined ? (
            pageContext.site.siteMetadata.subtitle
          ) : (
            <></>
          )}
        </h1>
        {children}
      </article>
      <Footer className="py-5 text-center text-gray-500" />
    </main>
  );
};

export default Base;
