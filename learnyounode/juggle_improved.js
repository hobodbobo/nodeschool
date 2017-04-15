let http = require('http')
let bl = require('bl')
let results = []
let count = 0

function logData() {
    results.map((x) => console.log(x))
}

function httpGet(i) {
  http.get(process.argv[i+2],(response) => {
    response.pipe(bl((err,data) => {
      if(err) return console.error(err)

      results[i] = data.toString()
      count++
      if(count === 3) logData()
    }))
  })
}

for(let i=0;i<3;++i) {
  httpGet(i)
}
