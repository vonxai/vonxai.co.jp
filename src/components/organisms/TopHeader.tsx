import React from "react";

export const TopHeader = () => {
  return (
    <header className="h-75vh">
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
        <li className="top-animation h-full w-full absolute top-0">
          <img
            src={`/assets/images/header01.webp`}
            alt="header image"
            className="object-cover w-full h-inherit opacity-0 animate-fade-and-up"
          />
        </li>
        <li className="top-animation h-full w-full absolute top-0">
          <img
            src={`/assets/images/header02.webp`}
            alt="header image"
            className="object-cover w-full h-inherit opacity-0 animate-fade-and-up"
          />
        </li>
        <li className="top-animation h-full w-full absolute top-0">
          <img
            src={`/assets/images/header03.webp`}
            alt="header image"
            className="object-cover w-full h-inherit opacity-0 animate-fade-and-up"
          />
        </li>
      </ul>
    </header>
  );
};
