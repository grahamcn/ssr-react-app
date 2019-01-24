import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { BasketContext } from '../../context/basketContext'

const Checkout = ({ data }) => {
  const { basket } = useContext(BasketContext)

  const total = Object.keys(basket).reduce((acc, curr) => {
    return acc + basket[curr].quantity * basket[curr].detail.price
  }, 0)

  return (
    <article className="checkout">
      <h1>Checkout</h1>
      <div>{JSON.stringify(data)}</div>
      <hr />
      <div>Total cost {total}</div>
    </article>
  )
}

Checkout.propTypes = {
  data: PropTypes.string.isRequired,
}

export default Checkout
