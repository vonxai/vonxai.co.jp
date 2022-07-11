import React from 'react'
import { FloatingContactButton } from '../atoms/FloatingContactButton'
import { Footer } from '../organisms/Footer'
import { Links } from '../organisms/Links'
import { Title } from '../organisms/Title'
import { TopHeader } from '../organisms/TopHeader'

const Home = () => {
  return (
    <main className="container mx-auto max-w-full m-0 bg-black">
      <TopHeader />
      <section className="py-5 mx-auto w-1/2 max-w-2xl">
        <Title />
        <Links />
      </section>
      <Footer className="py-5 text-center text-gray-300" />
    </main>
  )
}

export default Home
