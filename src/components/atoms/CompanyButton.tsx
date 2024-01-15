import React from "react";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

export const CompanyButton = (props) => {
  const { className, darkMode, iconMode } = props;
  const color = darkMode
    ? "text-white hover:text-gray-300"
    : "text-black hover:text-gray-500";

  return (
    <a
      href="/company"
      className={`${className} ${color} inline-flex items-center`}
      title="企業情報"
    >
      <BuildingOfficeIcon className="h-7 w-7 mx-1" />
      <p className={`text-xl whitespace-nowrap ${iconMode ? "md:hidden" : ""}`}>
        Company
      </p>
    </a>
  );
};
