// 知识点：
// concat-stream 模块 https://www.npmjs.com/package/concat-stream
process.stdin
    .pipe(require('concat-stream')(function(body) {
        process.stdout.write(body.toString().split('').reverse().join(''));
    }));



// 官方：
// var concat = require('concat-stream');

// process.stdin.pipe(concat(function(src) {
//     var s = src.toString().split('').reverse().join('');
//     console.log(s);
// }));