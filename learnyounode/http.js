var http = require('http')

function log(data) {
  console.log(data)
}

http.get(process.argv[2], function(response) {
  if (response) {
    response.setEncoding('utf-8')
    response.on("data", log)
    //response.on("error", log)
    //response.on("end", return)
  }
})
