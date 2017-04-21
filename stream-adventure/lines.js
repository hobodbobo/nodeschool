var through2 = require('through2');
var split = require('split');

process.stdin.pipe(split()).pipe(through2(function (line, _,next){
    if(!this.num) this.num = 0;

    if(this.num%2) {
      this.push(line.toString().toUpperCase()+'\n');
    } else {
      this.push(line.toString().toLowerCase()+'\n');
    }
    this.num++
    next()
})).pipe(process.stdout)
