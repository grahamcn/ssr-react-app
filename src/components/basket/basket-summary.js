import React, { useContext } from 'react'

import { BasketContext } from '../../context/basketContext'

const BasketSummary = () => {
  const basketContext = useContext(BasketContext)
  const { basket } = basketContext

  return <div>{Object.keys(basket).length} items</div>
}

export default BasketSummary
