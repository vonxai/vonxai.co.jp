import React from 'react'
import { CompanyInformation } from '../organisms/CompanyInformation'
import Base from './Base'

const Company = () => {
  return (
    <Base title="会社概要">
      <CompanyInformation />
    </Base>
  )
}

export default Company
