import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";

export const CareerButton = (props) => {
  const { className, darkMode, iconMode } = props;
  const color = darkMode
    ? "text-white hover:text-gray-300"
    : "text-black hover:text-gray-500";
  return (
    <a
      href="/careers"
      className={`${className} ${color} inline-flex items-center`}
      title="キャリア"
    >
      <UserIcon className="h-7 w-7 mx-1" />
      <p className={`text-xl whitespace-nowrap ${iconMode ? "md:hidden" : ""}`}>
        Careers
      </p>
    </a>
  );
};
