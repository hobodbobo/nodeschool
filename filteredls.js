var fs = require('fs')
var list = undefined
var reg = ".*\."+process.argv[3]+"$"

fs.readdir(process.argv[2], function(err,list) {
    if (err) {
      return console.log(err)
    }
    for (let file in list) {
      let filePath = list[file]
      if(filePath.match(reg)) {
        console.log(filePath)
      }
    }
})
