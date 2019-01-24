import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { BasketContext } from '../../context/basketContext'

const BasketItem = ({ item }) => {
  const { removeFromBasket, updateQuantity } = useContext(BasketContext)

  return (
    <div key={item.detail.id}>
      <div>Product: {item.detail.title}</div>
      <div>Product Id: {item.detail.id}</div>
      <div>Quantity: {item.quantity}</div>
      Quantity
      <label htmlFor="quantity">
        <select
          name="quantity"
          id="quantity"
          onChange={e => updateQuantity(item.detail.id, +event.target.value)} // eslint-disable-line
          onBlur={e => updateQuantity(item.detail.id, +event.target.value)} // eslint-disable-line
        >
          <option value="0" selected={item.quantity === 0}>
            0
          </option>
          <option value="1" selected={item.quantity === 1}>
            1
          </option>
          <option value="2" selected={item.quantity === 2}>
            2
          </option>
          <option value="3" selected={item.quantity === 3}>
            3
          </option>
          <option value="4" selected={item.quantity === 4}>
            4
          </option>
          <option value="5" selected={item.quantity === 5}>
            5
          </option>
          <option value="6" selected={item.quantity === 6}>
            6
          </option>
        </select>
      </label>
      <button onClick={() => removeFromBasket(item.detail.id)}>Delete</button>
    </div>
  )
}

BasketItem.propTypes = {
  item: PropTypes.shape({
    detail: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
    quantity: PropTypes.number.isRequired,
  }).isRequired,
}

export default BasketItem
