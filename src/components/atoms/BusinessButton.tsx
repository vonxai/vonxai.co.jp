import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export const BusinessButton = (props) => {
  const { className, darkMode, iconMode } = props;
  const color = darkMode
    ? "text-white hover:text-gray-300"
    : "text-black hover:text-gray-500";
  return (
    <a
      href="/service"
      className={`${className} ${color} inline-flex items-center`}
      title="事業情報"
    >
      <GlobeAltIcon className="h-5 w-5 mx-1 lg:h-7 lg:w-7" />
      <p className={`text-xl whitespace-nowrap ${iconMode ? "md:hidden" : ""}`}>
        SERVICE
      </p>
    </a>
  );
};
