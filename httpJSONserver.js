let http = require('http')
let url = require('url')

let server = http.createServer((req,res) => {
  if(req.method !== 'GET') return res.end('SEND ME A GET\n')
  parsedReq = url.parse(req.url , true)
  if(!parsedReq) return res.end('Unable to parse JSON\n')
  let date
  if(parsedReq.query['iso']) {
    date = new Date(parsedReq.query['iso'])
  } else return res.end('No iso in query request\n')
  let timeObj
  if(parsedReq.pathname === '/api/parsetime') {
    timeObj = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    }
  } else if(parsedReq.pathname === '/api/unixtime') {
    timeObj = {"unixtime":date.getTime()}
  } else return res.end('No api pathname provided\n')
  res.writeHead(200,{'content-type': 'application/json'})
  res.end(JSON.stringify(timeObj))
})
server.listen(process.argv[2])
