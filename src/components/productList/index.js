import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <Link to={product.id.toString()}>{product.title}</Link>
          <hr />
        </div>
      ))}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductList
