const path = require('path')
const process = require('process')
const express = require('express')

const app = express()

module.exports = {
  server: app,
  listen: (meta) => {
    app.get('/', (_, res) => {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({
        app: meta.appName,
        version: meta.version
      }));
      res.end();
    })

    const port  = process.env.PORT || 80
    const host  = process.env.HOST || '0.0.0.0'
    app.listen(port, host, (err) => {
      if (err) {
        console.error(err);
        process.exit(1)
      }
      console.log(`Starting server at http://${host}:${port}`)
    })
  }
}
