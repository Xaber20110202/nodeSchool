// 知识点：
// trumpet 模块使用
// 注意： tr Stream 和 loud Stream 是不同的
// 可以理解为：全部html流进tr，再全部流出tr；tr中被选中的loud，会被替换为新的loud
// 解惑： http://stackoverflow.com/questions/24103981/how-does-piping-a-stream-back-to-itself-work-with-trumpet

var tr = require('trumpet')();
var loud = tr.select('.loud').createStream();

loud.pipe(require('through2')(function (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);