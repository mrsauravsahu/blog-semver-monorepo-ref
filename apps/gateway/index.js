const path = require('path')
const process = require('process')
const { server: app, listen } = require('@monotools/express-server')
const routers = require('./routes')

const appName = path.basename(__dirname)

routers.forEach(r => {
  app.use(r.route, r.router)
})

listen({
  appName,
  version: '2.0.0'
})
