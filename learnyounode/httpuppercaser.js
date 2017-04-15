let http = require('http')
let map = require('through2-map') //map stream in chunks

let server = http.createServer((req,res) => {
    if(req.method !== 'POST') return res.end('SEND ME A POST\n')
    res.writeHead(200,{'content-type': 'text/plain'})
    req.pipe(map((x) => x.toString().toUpperCase())).pipe(res)
})
server.listen(process.argv[2])
