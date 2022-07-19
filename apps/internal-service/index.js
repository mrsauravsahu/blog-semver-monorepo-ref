const http = require('http')
const path = require('path')

const app = path.basename(__dirname)

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({ app, message: null }));
  res.end();
})

const port  = process.env.PORT || 80
console.log(`Starting server at http://localhost:${port}`)
server.listen(port, '0.0.0.0')
