var through2 = require('through2');
var stream = through2(write, end);

function write(buff, encoding, next) {
  this.push(buff.toString().toUpperCase());
  next()
}

function end(done) {
  done()
}
process.stdin.pipe(stream).pipe(process.stdout)
