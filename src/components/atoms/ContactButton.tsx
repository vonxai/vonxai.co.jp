import React from 'react'
import { MailIcon } from '@heroicons/react/outline'

export const ContactButton = (props) => {
  const { className, darkMode, iconMode } = props
  const color = darkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-500"

  return (
    <a href="/contact" className={`${className} ${color} inline-flex items-center`}>
      <MailIcon className="h-5 w-5 mx-1 lg:h-7 lg:w-7" />
      <p className={`text-xl whitespace-nowrap ${iconMode ? "lg:hidden" : ""}`}>お問い合わせ</p>
    </a>
  )
}
