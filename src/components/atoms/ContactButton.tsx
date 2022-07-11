import React from 'react'
import { MailIcon } from '@heroicons/react/outline'

export const ContactButton = () => {
  return (
    <a href="mailto:contact@vonxai.co.jp?subject=問い合わせ&amp;body=企業/団体名：%0D%0A氏名：%0D%0A件名：%0D%0A内容：" className="text-black hover:text-gray-500 text-xl inline-flex items-center">
      <MailIcon className="h-5 w-5 mx-1" />
      <p className="">お問い合わせ</p>
    </a>
  )
}
