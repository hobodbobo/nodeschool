var http = require('http')
var one=false;
var twoLoaded=false;
var twoPrinted=false;
var three=false;

var buffOne = ""
var buffTwo = ""
var buffThree = ""

function catOne(data) {
  buffOne = buffOne + data
}
function catTwo(data) {
  buffTwo = buffTwo + data
}
function catThree(data) {
  buffThree = buffThree + data
}
http.get(process.argv[2], function(response) {
  response.setEncoding('UTF-8')
  response.on("data",catOne)
  response.on("end",oneDone)
})
http.get(process.argv[3], function(response) {
  response.setEncoding('UTF-8')
  response.on("data",catTwo)
  response.on("end",twoDone)
})
http.get(process.argv[4], function(response) {
  response.setEncoding('UTF-8')
  response.on("data",catThree)
  response.on("end",threeDone)
})

function oneDone() {
  console.log(buffOne)
  one = true
  printTwo()
}

function twoDone() {
    twoLoaded = true
    printTwo()
}
function printTwo() {
  if(one && twoLoaded && !twoPrinted) {
    console.log(buffTwo)
    twoPrinted = true
    printThree()
  }
}
function threeDone() {
  three = true
  printThree()
}
function printThree() {
  if(one && twoPrinted && three) {
    console.log(buffThree)
  }
}
