import React from 'react'
// hydrate: use existing markup if it's there, vs render which assumes a blank slate
import { hydrate } from 'react-dom'
import App from './app'
import '@babel/polyfill'

let ssrPageData, clientSettings
if (!window.BOOTSTRAP) {
  clientSettings = { featureA: true }
} else {
  clientSettings = window.BOOTSTRAP.clientSettings
  ssrPageData = window.BOOTSTRAP.ssrPageData
  delete window.BOOTSTRAP
}

// React Strcit mode wil show error in the console in Development mode only, for depreceated React APIs and suchlike
hydrate(
  <React.StrictMode>
    <App clientSettings={clientSettings} ssrPageData={ssrPageData} />
  </React.StrictMode>,
  document.getElementById('root'),
)
