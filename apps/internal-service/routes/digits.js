const digits = require('../static/digits.json')

const express = require('express')

const router = express.Router()

router.get('/', (_, res) => {
  res.send(digits)
})

module.exports = {
  route: '/digits',
  router
}