import React from 'react'
import Meta from '../Meta'
import { Footer } from '../organisms/Footer'
import { Header } from '../organisms/Header'

const Base = ({ pageContext, title, children }) => {
  return (
    <main className="container mx-auto max-w-full m-0 bg-white">
      { (Object.keys(pageContext).length > 0) ? <Meta subtitle={title} meta={pageContext} /> : <></> }
      <Header />
      <article className="mx-auto max-w-2xl my-10 px-2 lg:my-4">
        <h2 className="text-4xl font-bold lg:text-xl">{title}</h2>
        {children}
      </article>
      <Footer className="py-5 text-center text-gray-500" />
    </main>
  )
}

export default Base
