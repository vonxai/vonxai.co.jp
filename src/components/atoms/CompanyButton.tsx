import React from "react";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

export const CompanyButton = (props) => {
  const { className, darkMode, iconMode } = props;
  const color = darkMode
    ? "text-white hover:text-gray-300"
    : "text-black hover:text-gray-500";

  return (
    <a
      href="/about"
      className={`${className} ${color} inline-flex items-center`}
      title="企業情報"
    >
      <BuildingOfficeIcon className="h-5 w-5 mx-1 lg:h-7 lg:w-7" />
      <p className={`text-xl whitespace-nowrap ${iconMode ? "md:hidden" : ""}`}>
        ABOUT
      </p>
    </a>
  );
};
