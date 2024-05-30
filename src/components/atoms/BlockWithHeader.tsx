import React from "react";

export const BlockWithHeader: React.FC<{
  Tag: keyof JSX.IntrinsicElements;
  title: string;
  ruby?: string;
  children: React.ReactNode;
}> = ({ Tag, title, ruby = null, children }) => {
  const heading = Tag === "h2" ? "#" : "##";
  const fontSize =
    Tag === "h2" ? "text-4xl md:text-2xl" : "text-2xl md:text-xl";
  const border =
    Tag === "h2"
      ? "before:content-[''] before:block before:absolute before:left-0	before:bottom-0 before:w-full	before:h-px	before:bg-gray-200 after:content-[''] after:block after:absolute after:left-0	after:bottom-0 after:w-1/3	after:h-px	after:bg-gray-500"
      : "";
  const bottomSpace = Tag === "h2" ? "pb-7" : "pb-5";
  const titleEl =
    ruby !== null ? (
      <ruby>
        {title}
        <rt>{ruby}</rt>
      </ruby>
    ) : (
      title
    );
  return (
    <>
      <Tag
        id={title}
        className={`${fontSize} font-semibold relative ${bottomSpace} pt-10 ${border}`}
      >
        <a
          href={`#${title}`}
          className={`before:content-['${heading}'] before:mr-3 before:md:mr-1 before:hover:text-gray-500`}
        >
          {titleEl}
        </a>
      </Tag>
      {children}
    </>
  );
};
