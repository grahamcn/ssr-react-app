import React from 'react'
import PropTypes from 'prop-types'

import usePageData from '../hooks/usePageData'
import { Loading } from '../utility'
import { Home, Products, Product, Basket, Checkout, Content } from '../views'

const RouteHandler = ({ location }) => {
  const { isLoading, pageData } = usePageData(location.pathname)

  if (isLoading) {
    return <Loading />
  }

  // simplistically catch an error for now
  if (!pageData.component) {
    return <div>404 / Error</div>
  }

  let Component
  switch (pageData.component) {
    case 'home':
      Component = Home
      break
    case 'products':
      Component = Products
      break
    case 'product':
      Component = Product
      break
    case 'basket':
      Component = Basket
      break
    case 'checkout':
      Component = Checkout
      break
    case 'other':
      Component = Content
      break
    default:
      Component = Content
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
