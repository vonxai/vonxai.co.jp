import React from 'react'
import { FloatingContactButton } from '../atoms/FloatingContactButton'
import Meta from '../Meta'
import { Footer } from '../organisms/Footer'
import { Links } from '../organisms/Links'
import { Title } from '../organisms/Title'
import { TopHeader } from '../organisms/TopHeader'

const Home = ({ pageContext }) => {
  return (
    <main className="container mx-auto max-w-full min-h-screen m-0 bg-black">
      <Meta meta={pageContext} />
      <TopHeader />
      <div className="relative top-m10vh">
        <section className="py-5 mx-auto max-w-2xl w-42rem px-2">
          <Title />
          <Links />
        </section>
        <Footer className="pt-5 md:pt-2 text-center text-gray-300" />
      </div>
    </main>
  )
}

export default Home
