// 知识点：
// 1. split 模块 https://www.npmjs.com/package/split

var index = 0;
process.stdin.pipe(require('split')()).pipe(require('through2')(function(line, encoding, next) {
    this.push(line.toString()[index++ % 2 ? 'toUpperCase' : 'toLowerCase']() + '\n');
    next();
})).pipe(process.stdout);



// 官方：
// var through = require('through2');
// var split = require('split');

// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout);