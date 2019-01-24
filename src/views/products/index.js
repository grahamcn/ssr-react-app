import React from 'react'
import PropTypes from 'prop-types'

import ProductList from '../../components/productList'

const Products = ({ data }) => {
  return (
    <article className="products">
      <h1>Products</h1>
      <ProductList products={data} />
    </article>
  )
}

Products.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Products
