import React from 'react'
import { FloatingContactButton } from '../atoms/FloatingContactButton'
import { Footer } from '../organisms/Footer'
import { Header } from '../organisms/Header'

const Base = ({ title, children }) => {
  return (
    <main className="container mx-auto max-w-full m-0 bg-white">
      <Header />
      <article className="mx-auto max-w-2xl my-10 px-2">
        <h2 className="text-4xl font-bold md:text-xl">{title}</h2>
        {children}
      </article>
      <FloatingContactButton />
      <Footer className="py-5 text-center text-gray-500" />
    </main>
  )
}

export default Base
