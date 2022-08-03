const path = require('path')
const process = require('process')
const express = require('express')

const appName = path.basename(__dirname)
const app = express()

app.get('/', (_, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({
    app: appName,
    version: '1.0.0'
  }));
  res.end();
})

const port  = process.env.PORT || 80

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
    process.exit(1)
  }
  console.log(`Starting server at http://localhost:${port}`)
})
