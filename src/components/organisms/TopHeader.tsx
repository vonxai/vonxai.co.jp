import React from 'react'

export const TopHeader = () => {
  return (
    <header className='h-75vh'>
      <style>
        {`
          .top-animation:nth-of-type(1) img {
            animation-delay: 0s;
          }
          .top-animation:nth-of-type(2) img {
            animation-delay: 4s;
          }
          .top-animation:nth-of-type(3) img {
            animation-delay: 8s;
          }
        `}
      </style>
      <ol className='absolute h-inherit top-0 right-0 bottom-0 left-0'>
        <li className='top-animation absolute h-full top-0 right-0 bottom-0 left-0'>
          <img
            src={`/assets/images/header01.webp`}
            alt="header image"
            className='object-cover w-full h-inherit opacity-0 animate-fade-and-up'
          />
        </li>
        <li className='top-animation absolute h-full top-0 right-0 bottom-0 left-0'>
          <img
            src={`/assets/images/header02.webp`}
            alt="header image"
            className='object-cover w-full h-inherit opacity-0 animate-fade-and-up'
          />
        </li>
        <li className='top-animation absolute h-full top-0 right-0 bottom-0 left-0'>
          <img
            src={`/assets/images/header03.webp`}
            alt="header image"
            className='object-cover w-full h-inherit opacity-0 animate-fade-and-up'
          />
        </li>
      </ol>
    </header>
  )
}
