import React from 'react'
import { Link } from '@reach/router'

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    {' | '}
    <Link to="/products">Products</Link>
    {' | '}
    <Link to="/basket">Basket</Link>
    {' | '}
    <Link to="/other">Other</Link>
    {' | '}
    <Link to="/other/another">Another</Link>
  </nav>
)

export default Nav
