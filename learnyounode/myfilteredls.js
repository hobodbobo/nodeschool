let fs = require('fs')

function filteredLS(dir,ext,callback) {
  fs.readdir(dir,function(e,d) {
    if(e) {
      callback(e)
      return
    }
    let l = []
    d.forEach(function(file) {
      if(file.match(".*\."+ext+"$")) {
        l.push(file)
      }
    })
    callback(null,l)
  })
}

module.exports = filteredLS
