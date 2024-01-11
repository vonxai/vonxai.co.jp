import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export const MissionButton = (props) => {
  const { className, darkMode, iconMode } = props;
  const color = darkMode
    ? "text-white hover:text-gray-300"
    : "text-black hover:text-gray-500";
  return (
    <a
      href="/mission"
      className={`${className} ${color} inline-flex items-center`}
      title="ミッション・バリュー"
    >
      <RocketLaunchIcon className="h-7 w-7 mx-1" />
      <p className={`text-xl whitespace-nowrap ${iconMode ? "md:hidden" : ""}`}>
        MISSION
      </p>
    </a>
  );
};
