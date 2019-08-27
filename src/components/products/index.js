import React from 'react'
import PropTypes from 'prop-types'

import OtherComnponent from './other-component'

const ProductsComponent = ({ data }) => {
  return (
    <div>
      {data.map(product => (
        <div key={product.id}>
          <a href={product.id.toString()}>{product.title}</a>
          <hr />
        </div>
      ))}
      <OtherComnponent />
    </div>
  )
}

ProductsComponent.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ProductsComponent
