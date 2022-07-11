import React from 'react'
import { ContactButton } from '../atoms/ContactButton'
import Base from './Base'

const Contact = ({ pageContext }) => {
  return (
    <Base title="お問い合わせ">
      <p className="mt-6 mb-4 text-2xl md:text-lg">
        お問い合わせは以下にメールをお願い致します。
      </p>
      <ContactButton />
      <p className="my-6 text-2xl md:text-lg">
        上記リンクが開かない場合はお手数ですが contact@vonxai.co.jp 宛に
        <ul className="list-disc ml-6">
          <li>企業/団体名</li>
          <li>氏名</li>
          <li>件名</li>
          <li>内容</li>
        </ul>
        を添えてメールをお送りください。
      </p>
    </Base>
  )
}

export default Contact
