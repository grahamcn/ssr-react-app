import React from 'react'

import BasketSummary from '../../basket/basket-summary'
import Nav from './nav'

const Header = () => (
  <header>
    <h1>React webapp</h1>
    <h2>Boilerplate</h2>
    <BasketSummary />
    <hr />
    <Nav />
    <hr />
  </header>
)

export default Header
