import React from 'react'
import { BusinessButton } from '../atoms/BusinessButton'
import { CompanyButton } from '../atoms/CompanyButton'

export const Header = () => {
  return (
    <header>
      <div className="mx-10vw py-2 px-6 flex md:mx-0">
        <h1 className="grow text-6xl font-bold md:text-4xl sm:text-2xl">
          <a href="/" className="hover:text-gray-500">vonxai inc.</a>
        </h1>
        <CompanyButton className="mr-2 text-black" />
        <BusinessButton className="text-black" darkMode={false} />
      </div>
    </header>
  )
}
