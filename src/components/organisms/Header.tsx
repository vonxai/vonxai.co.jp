import React from "react";
import { BusinessButton } from "../atoms/BusinessButton";
import { CompanyButton } from "../atoms/CompanyButton";
import { ContactButton } from "../atoms/ContactButton";
import { MissionButton } from "../atoms/MissionButton";
import { CareerButton } from "../atoms/CareerButton";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-10">
      <nav
        className="mx-auto flex max-w-1xl items-center justify-between p-4 px-8 sm:px-1"
        aria-label="Global"
      >
        <div className="flex">
          <a
            href="/"
            className="grow text-3xl font-bold md:text-2xl sm:text-xl hover:text-gray-500 hover:invert-50"
            title="vonxai inc."
          >
            <img
              src={`/assets/images/logo.svg`}
              className="inline h-20px w-20px mr-2 lg:mr-1"
              alt="vonxai logo"
            />
            vonxai inc.
          </a>
        </div>
        <div className="flex flex-1 justify-between md:justify-end ml-5">
          <div className="flex gap-x-5 lg:gap-x-2 ml-2">
            <CompanyButton
              className="text-base leading-6"
              darkMode={false}
              iconMode={true}
            />
            <MissionButton
              className="text-base leading-6"
              darkMode={false}
              iconMode={true}
            />
            <BusinessButton
              className="text-base leading-6"
              darkMode={false}
              iconMode={true}
            />
            <CareerButton
              className="text-base leading-6"
              darkMode={false}
              iconMode={true}
            />
          </div>
          <div className="flex md:ml-2">
            <ContactButton
              className="text-base leading-6"
              darkMode={false}
              iconMode={true}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
