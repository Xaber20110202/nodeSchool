// 知识点：
// through2-map
// process.argv数组项是字符串
// post请求处理
// request.method

// 一、官方类似
// var http = require('http');
// var map = require('through2-map');

// http.createServer(function (req, res) {
//     if (req.method === 'POST') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         req.pipe(map(function (chunk) {
//             return chunk.toString().toUpperCase()
//         })).pipe(res);
//     }

// }).listen(Number(process.argv[2]));

// 二、
// 使用bl模块
var bl = require('bl');
require('http').createServer(function (req, res) {
    if (req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        req.pipe(bl(function (err, data) {
            if (err) {
                return console.log(err);
            }
            res.end(data.toString().toUpperCase());
        }));
    }
}).listen(Number(process.argv[2]));