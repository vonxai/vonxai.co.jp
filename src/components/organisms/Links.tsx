import React from 'react'
import { BusinessButton } from '../atoms/BusinessButton'
import { CompanyButton } from '../atoms/CompanyButton'

export const Links = () => {
  return (
    <section className="flex m mt-5">
      <CompanyButton className="mr-2" darkMode={true} />
      <BusinessButton className="mr-2" darkMode={true} />
    </section>
  )
}
