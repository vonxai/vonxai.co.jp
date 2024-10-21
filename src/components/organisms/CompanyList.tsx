import React from "react";

export const CompanyList = (props) => {
  const { className, darkMode } = props;
  return (
    <ul className="flex flex-wrap justify-center items-center gap-5 sm:mt-5">
      <li className="inline-flex flex-row flex-wrap w-36">
        <img
          src={`/assets/images/companies/dwango.webp`}
          alt="株式会社ドワンゴ"
          title="株式会社ドワンゴ"
        />
      </li>
      <li
        className={`inline-flex flex-row flex-wrap w-36 ${
          darkMode ? "" : "bg-[#000066]"
        }`}
      >
        <img
          src={`/assets/images/companies/kadokawa.webp`}
          alt="株式会社KADOKAWA"
          title="株式会社KADOKAWA"
        />
      </li>
      <li
        className={`inline-flex flex-row flex-wrap w-36 ${
          darkMode ? "" : "bg-gray-700"
        }`}
      >
        <img
          src={`/assets/images/companies/seeder.webp`}
          alt="SEEDER株式会社"
          title="SEEDER株式会社"
        />
      </li>
      <li
        className={`inline-flex fflex-row flex-wrap w-36 ${
          darkMode ? "bg-white" : ""
        }`}
      >
        <img
          src={`/assets/images/companies/untrace.webp`}
          alt="株式会社アントレース"
          title="株式会社アントレース"
        />
      </li>
      <li
        className={`inline-flex fflex-row flex-wrap w-36 ${
          darkMode ? "bg-white" : ""
        }`}
      >
        <img
          src={`/assets/images/companies/estay.webp`}
          alt="株式会社estay"
          title="株式会社estay"
        />
      </li>
      <li
        className={`inline-flex fflex-row flex-wrap w-36 ${
          darkMode ? "bg-white" : ""
        }`}
      >
        <img
          src={`/assets/images/companies/hamposaki.webp`}
          alt="株式会社はんぽさき"
          title="株式会社はんぽさき"
        />
      </li>
    </ul>
  );
};
