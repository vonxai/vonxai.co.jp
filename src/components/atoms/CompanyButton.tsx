import React from 'react'
import { OfficeBuildingIcon } from '@heroicons/react/outline'

export const CompanyButton = (props) => {
  const { className, darkMode, iconMode } = props
  const color = darkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-500"

  return (
    <a href="/company" className={`${className} ${color} inline-flex items-center`}>
      <OfficeBuildingIcon className="h-5 w-5 mx-1 sm:h-7 sm:w-7" />
      <p className={`text-xl whitespace-nowrap ${iconMode ? "sm:hidden" : ""}`}>企業情報</p>
    </a>
  )
}
