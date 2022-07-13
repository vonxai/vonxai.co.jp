import React from 'react'
import { GlobeAltIcon } from '@heroicons/react/outline'

export const BusinessButton = (props) => {
  const { className, darkMode, iconMode } = props
  const color = darkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-500"
  return (
    <a href="/business" className={`${className} ${color} inline-flex items-center`}>
      <GlobeAltIcon className="h-5 w-5 mx-1 sm:h-7 sm:w-7" />
      <p className={`text-xl whitespace-nowrap ${iconMode ? "sm:hidden" : ""}`}>事業情報</p>
    </a>
  )
}
