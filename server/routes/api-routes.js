import express from 'express'

import products from './test-data'

const router = express.Router()

router.get('/', function(req, res) {
  res.send({
    component: 'home',
    title: 'Home',
    description: 'Home page meta data',
    data: 'Home page data',
  })
})

router.get('/products', function(req, res) {
  res.send({
    component: 'products',
    title: 'Products',
    description: 'Products page meta data',
    data: products,
  })
})

router.get('/basket', function(req, res) {
  res.send({
    component: 'basket',
    title: 'Basket',
    description: 'Basket page meta data',
    data: 'Basket page data',
  })
})

router.get('/*', function(req, res) {
  res.send({
    component: 'other',
    title: 'Dynamic title...',
    description: 'Dynamic meta data',
    data: `catch all api route for ${req.url}`,
  })
})

export default router
