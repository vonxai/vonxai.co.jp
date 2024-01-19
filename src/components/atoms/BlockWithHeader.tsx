import React from "react";

export const BlockWithHeader = (props) => {
  const { Tag, title, children } = props;
  return (
    <>
      <Tag
        id={title}
        className="text-4xl font-semibold md:text-2xl relative pb-7 pt-16 -mt-5 before:content-[''] before:block before:absolute before:left-0	before:bottom-0 before:w-full	before:h-px	before:bg-gray-200 after:content-[''] after:block after:absolute after:left-0	after:bottom-0 after:w-1/3	after:h-px	after:bg-gray-500"
      >
        <a
          href={`#${title}`}
          className="before:content-['#'] before:mr-3 before:md:mr-1 before:hover:text-gray-500"
        >
          {title}
        </a>
      </Tag>
      {children}
    </>
  );
};
