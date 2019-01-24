import express from 'express'

const router = express.Router()

router.get('/:id', function(req, res) {
  const { id } = req.params
  const featureA = +id === 1

  res.send({ featureA })
})

export default router
