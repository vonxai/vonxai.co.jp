import React from 'react'
import { BusinessButton } from '../atoms/BusinessButton'
import { CompanyButton } from '../atoms/CompanyButton'

export const Header = () => {
  return (
    <header>
      <div className="mx-10vw py-2 px-6 sm:px-2 flex md:mx-0">
        <h1 className="grow text-6xl font-bold lg:text-4xl">
          <a href="/" className="hover:text-gray-500 hover:invert-50"><img src={`/assets/images/logo.svg`} className="inline h-3rem lg:h-2rem mr-1" />vonxai inc.</a>
        </h1>
        <div className="flex items-center justify-center">
          <CompanyButton className="mr-2 text-black" darkMode={false} iconMode={true} />
          <BusinessButton className="text-black" darkMode={false} iconMode={true} />
        </div>
      </div>
    </header>
  )
}
