import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { BasketContext } from '../../context/basketContext'
import BasketItem from '../../components/basket/basketItem'

const Basket = ({ data }) => {
  const { basket } = useContext(BasketContext)

  return (
    <article className="basket">
      <h1>Basket</h1>
      <div>{JSON.stringify(data)}</div>
      {!basket ? (
        <p>Basket is empty</p>
      ) : (
        <div>
          {Object.keys(basket)
            .map(productId => basket[productId])
            .map(product => (
              <div key={product.detail.id}>
                <BasketItem item={basket[product.detail.id]} />
              </div>
            ))}
        </div>
      )}
      <Link to="/checkout">Proceed to Checkout</Link>
    </article>
  )
}

Basket.propTypes = {
  data: PropTypes.string.isRequired,
}

export default Basket
