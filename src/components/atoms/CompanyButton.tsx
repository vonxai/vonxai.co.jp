import React from 'react'
import { OfficeBuildingIcon } from '@heroicons/react/outline'

export const CompanyButton = (props) => {
  const { className, darkMode, onlyIcon } = props
  const color = darkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-500"

  return (
    <a href="/company" className={`${className} ${color} inline-flex items-center`}>
      <OfficeBuildingIcon className="h-5 w-5 mx-1" />
      {onlyIcon ? <></> : <p className="text-xl md:text-base sm:hidden">企業情報</p>}
    </a>
  )
}
