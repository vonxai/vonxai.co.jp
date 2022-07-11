import React from 'react'
import { MailIcon } from '@heroicons/react/outline'

export const FloatingContactButton = (props) => {
  return (
    <a href="/contact" className="fixed z-90 bottom-6 right-4 text-black text-xl inline-flex items-center bg-gray-300 py-2 px-4 rounded-full shadow hover:bg-gray-400">
      <MailIcon className="h-5 w-5 mx-1" />
      お問い合わせ
    </a>
  )
}
