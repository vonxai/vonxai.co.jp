import React from "react";

export const TopHeader = () => {
  return (
    <div className="h-75vh">
      <style>
        {`
          .top-animation:nth-of-type(1) img {
            animation-delay: 0s;
          }
          .top-animation:nth-of-type(2) img {
            animation-delay: 5s;
          }
          .top-animation:nth-of-type(3) img {
            animation-delay: 10s;
          }
        `}
      </style>
      <ul className="h-inherit">
        <li className="top-animation h-inherit w-full overflow-hidden absolute">
          <img
            src={`/assets/images/header01.webp`}
            alt="header image"
            className="object-cover h-120 w-full opacity-0 animate-fade-and-up"
          />
        </li>
        <li className="top-animation h-inherit w-full overflow-hidden absolute">
          <img
            src={`/assets/images/header02.webp`}
            alt="header image"
            className="object-cover h-120 w-full opacity-0 animate-fade-and-up"
          />
        </li>
        <li className="top-animation h-inherit w-full overflow-hidden absolute">
          <img
            src={`/assets/images/header03.webp`}
            alt="header image"
            className="object-cover h-120 w-full opacity-0 animate-fade-and-up"
          />
        </li>
      </ul>
    </div>
  );
};
