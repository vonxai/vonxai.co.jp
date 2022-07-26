import React from 'react'
import Base from './Base'
import { Helmet } from 'react-helmet'

const NotFound = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext} title="404 Not Found">
      <Helmet title="404 - vonxai inc.">
        <meta name="description" content="vonxai inc.のコーポレートサイトです" />
        <link rel="icon" type="image/png" href={`/assets/images/logo.svg`} sizes="16x16" />
      </Helmet>
    </Base>
  )
}

export default NotFound
