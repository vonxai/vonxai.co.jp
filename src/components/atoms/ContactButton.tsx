import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export const ContactButton = (props) => {
  const { className, darkMode, iconMode } = props;
  const color = darkMode
    ? "text-white hover:text-gray-300"
    : "text-black hover:text-gray-500";

  return (
    <a
      href="/contact"
      className={`${className} ${color} inline-flex items-center`}
      title="お問い合わせ"
    >
      <EnvelopeIcon className="h-5 w-5 mx-1 lg:h-7 lg:w-7" />
      <p className={`text-xl whitespace-nowrap ${iconMode ? "md:hidden" : ""}`}>
        お問い合わせ
      </p>
    </a>
  );
};
