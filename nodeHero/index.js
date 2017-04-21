const http = require('http')
const port = 3000

const requestHandler = (request, response) => _{
  console.log(req.url)
  res.end('Hello Node.js server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened')
  }

  console.log('server is listening on port ${port}')
})
