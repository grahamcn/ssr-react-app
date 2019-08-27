import React from 'react'
import PropTypes from 'prop-types'

import { Header, Footer } from './components/common'
import Routes from './routes'

import { BasketProvider } from './context/basketContext'
import { ApplicationDataProvider } from './context/applicationDataContext'

const App = ({ ssrPageData }) => {
  return (
    <div className="app">
      <ApplicationDataProvider ssrPageData={ssrPageData}>
        <BasketProvider>
          <Header />
          <main>
            <Routes />
          </main>
        </BasketProvider>
      </ApplicationDataProvider>
      <Footer />
    </div>
  )
}

App.propTypes = {
  ssrPageData: PropTypes.object.isRequired,
}

export default App
