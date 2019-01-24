import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { BasketContext } from '../../context/basketContext'

const Product = ({ data }) => {
  const { addToBasket } = useContext(BasketContext)

  return (
    <article className="product">
      <h1>Product Id: {data.id}</h1>
      <h2>{data.title}</h2>

      <button onClick={() => addToBasket(data)}>Add to basket</button>
    </article>
  )
}

Product.propTypes = {
  productId: PropTypes.string,
  data: PropTypes.object.isRequired,
}

export default Product
