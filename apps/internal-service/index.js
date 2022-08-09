const path = require('path')
const process = require('process')
const { server: app, listen } = require('@monotools/express-server')
const routes = require('./routes')

routes.forEach(r => {
  app.use(r.route, r.router)
})

const appName = path.basename(__dirname)

listen({
  appName,
  version: '2.0.0'
})
