// 知识点：
// 1. through2模块的使用
// 返回了一个String类型
// through(function (buffer, encoding, next) {
// }, function (done) {
// });

// 2. buffer的toString处理针对的已经是一个字符串

// 原：
process.stdin.pipe(require('through2')(function(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase();
    next();
}, function(done) {
    done();
})).pipe(process.stdout);

// 官方：

var through = require('through2');
var tr = through(function(buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
});
process.stdin.pipe(tr).pipe(process.stdout);