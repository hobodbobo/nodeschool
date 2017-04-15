let net = require('net')
let strftime = require('strftime')

server =  net.createServer((socket) => {
  date = new Date()
  socket.end(strftime("%Y-%m-%d %H:%M",date)+'\n')
  //socket.end()
})
server.listen(process.argv[2])
