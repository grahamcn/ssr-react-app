import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

import Header from './components/header'
import Routes from './routes'
import Footer from './components/footer'

import { ClientSettingsProvider } from './context/clientSettingsContext'
import { BasketProvider } from './context/basketContext'
import { ApplicationDataProvider } from './context/applicationDataContext'

const App = ({ clientSettings, ssrPageData }) => {
  return (
    <div className="app">
      <ApplicationDataProvider ssrPageData={ssrPageData}>
        <ClientSettingsProvider clientSettings={clientSettings}>
          <BasketProvider>
            <Header />
            <main>
              <Routes />
            </main>
          </BasketProvider>
        </ClientSettingsProvider>
      </ApplicationDataProvider>
      <Footer />
    </div>
  )
}

App.propTypes = {
  ssrPageData: PropTypes.object.isRequired,
  clientSettings: PropTypes.object.isRequired,
}

export default hot(module)(App)
