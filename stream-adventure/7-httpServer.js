// 知识点：
// 1. through2模块使用 （需要调用next）进行下一步！
// 2. req、res都是 Stream 类型

var through2 = require('through2');

require('http').createServer(function(req, res) {
    if (req.method === 'POST') {
        req.pipe(through2(function(buffer, encoding, next) {
            this.push(buffer.toString().toUpperCase());
            next();
        })).pipe(res);
    }
}).listen(process.argv[2]);


// 官方：
// var http = require('http');
// var through = require('through2');

// var server = http.createServer(function(req, res) {
//     if (req.method === 'POST') {
//         req.pipe(through(function(buf, _, next) {
//             this.push(buf.toString().toUpperCase());
//             next();
//         })).pipe(res);
//     } else res.end('send me a POST\n');
// });
// server.listen(parseInt(process.argv[2]));