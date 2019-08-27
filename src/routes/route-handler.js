import React from 'react'
import PropTypes from 'prop-types'

import usePageData from '../hooks/usePageData'
import { Loading } from '../utility'
import { Home, Products, Basket } from '../components'

const RouteHandler = ({ location }) => {
  const { isLoading, pageData } = usePageData(location.pathname)

  if (isLoading) {
    return <Loading />
  }

  if (!pageData.component) {
    return <div>404 / Error</div>
  }

  // eslint-disable-next-line no-console
  console.log(`rendering... ${pageData.component}`)

  let Component
  switch (pageData.component) {
    case 'home':
      Component = Home
      break
    case 'products':
      Component = Products
      break
    case 'basket':
      Component = Basket
      break
    default:
      Component = Home
      break
  }

  return <Component data={pageData.data} />
}

RouteHandler.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default RouteHandler
