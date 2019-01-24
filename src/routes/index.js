import React from 'react'
import { Router } from '@reach/router'

import RouteHandler from './route-handler'

const Routes = () => {
  return (
    <Router>
      <RouteHandler default />
    </Router>
  )
}

export default Routes
