import React from 'react'

export const App = ({ children }) => {
  return <>{children}</>
}

export const wrapPageElement = ({ element }) => (<App>{element}</App>)
