const express = require('express')

const router = express.Router()

router.get('/', (_, res) => {res.redirect(`${process.env.INTERNAL_SERVICE}/digits`)})

module.exports = { route: '/digits', router }
