var fs = require('fs')
var lineCount = undefined

fs.readFile(process.argv[2],'utf-8', function done(err,data){
  if(err) {
    return console.log(err)
  }
  lineCount = data.split('\n').length-1
  console.log(lineCount)
})
