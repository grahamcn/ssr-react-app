import React from 'react'
import PropTypes from 'prop-types'

let BasketContext
const { Consumer, Provider } = (BasketContext = React.createContext())

// use an imutable library? possibly overkill. can unit test state is not mutated?
// look at useReducer hook
class BasketProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      basket: {},
      addToBasket: this.addToBasket,
      removeFromBasket: this.removeFromBasket,
      updateQuantity: this.updateQuantity,
    }
  }

  updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      return this.setState(prevState => {
        delete prevState.basket[productId]
        return Object.assign({}, prevState)
      })
    }

    return this.setState(prevState => ({
      basket: Object.assign({}, prevState.basket, {
        [productId]: {
          ...prevState.basket[productId],
          quantity: quantity,
        },
      }),
    }))
  }

  addToBasket = product => {
    const { basket } = this.state

    // does not exist
    if (!basket[product.id]) {
      return this.setState(prevState => ({
        basket: Object.assign({}, prevState.basket, {
          [product.id]: {
            quantity: 1,
            detail: product,
          },
        }),
      }))
    }

    // does exist, bump quantity by one.
    return this.setState(prevState => ({
      basket: Object.assign({}, prevState.basket, {
        [product.id]: {
          ...prevState.basket[product.id],
          quantity: prevState.basket[product.id].quantity + 1,
        },
      }),
    }))
  }

  removeFromBasket = productId => {
    return this.setState(prevState => {
      delete prevState.basket[productId]
      return Object.assign({}, prevState)
    })
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

BasketProvider.propTypes = {
  children: PropTypes.node.isRequired, // no point wrapping nothing with Context, therefore required.
}

export { BasketProvider, Consumer as BasketConsumer, BasketContext }
