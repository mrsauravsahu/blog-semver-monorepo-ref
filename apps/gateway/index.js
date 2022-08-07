const path = require('path')
const process = require('process')
const { app, listen } = require('@monotools/express-server')

const appName = path.basename(__dirname)

listen({
  appName,
  version: '2.0.0'
})
