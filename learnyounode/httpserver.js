let http = require('http')
let fs = require('fs')

let server = http.createServer((req,res) => {
  res.writeHead(200, {'content-type': 'text/plain'})
  let file = fs.createReadStream(process.argv[3]).pipe(res)
})
server.listen(Number(process.argv[2]))
