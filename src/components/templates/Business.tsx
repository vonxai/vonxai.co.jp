import React from 'react'
import { Works } from '../organisms/Works'
import Base from './Base'

const Business = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext} title="事業概要">
      <Works />
    </Base>
  )
}

export default Business
