var http = require('http')
var buff = ""
function app(data) {
  buff = buff + data
}

http.get(process.argv[2], function(response) {
  response.setEncoding('UTF-8')
  response.on('data',app)
  response.on("error",console.error)
  response.on("end", function() {
    console.log(buff.length)
    console.log(buff)
  })
}).on('error',console.error)
