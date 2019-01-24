import React from 'react'
// hydrate: use existing markup if it's there, vs render which assumes a blank slate
import { hydrate } from 'react-dom'
import App from './app'
import '@babel/polyfill'

// looks for accessibility violations & semantic errors in our rendered Dom - re-implement once local CSR enabled
// in dev mode only.
// if (process.env.NODE_ENV === 'development') {s
//   const axe = require('react-axe')
//   axe(React, ReactDom, 2000)
// }

// is this required? check. looks like only if you want to fire a callback after accepting
// an updated module.
// if (module.hot) {
//   module.hot.accept()
// }

// temporary fix for local development with no SSR for now.
let ssrPageData, clientSettings
if (!window.BOOTSTRAP) {
  // temp
  clientSettings = { featureA: true }
  ssrPageData = {
    component: 'home',
    title: 'Home',
    description: 'desc',
    data: 'whatever',
  }
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
