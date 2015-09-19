// 知识点： createReadStream 默认返回Node stream
// createServer callback 接收的request和response也是Node stream

// fs.createReadStream()
// request 和 response 也都是 Node stream！这意味着，如果需要的话，你可以使用流式处理（streaming）所抽象的那些方法来实现发送和接收数据。
// fs 这个核心模块也含有一些用来处理文件的流式（stream） API。
// 你可以使用 fs.createReadStream() 方法来为命令行参数指定的文件创建一个 stream。
// 这个方法会返回一个 stream 对象，该对象可以使用类似 src.pipe(dst) 的语法把数据从 src流传输(pipe) 到 dst流中。
// 通过这种形式，你可以轻松地把一个文件系统的 stream 和一个 HTTP 响应的 stream 连接起来。

// 一、
// var fs = require('fs');
// var path = process.argv[3];
// require('http').createServer(function (req, res) {
//     var str = '';

//     fs.createReadStream(path, {
//         defaultEncoding: 'utf8'
    
//     }).on('data', function (chunk) {
//         str += chunk;
    
//     }).on('end', function () {
//         res.end(str);
//     });

// }).listen(Number(process.argv[2]));


// 二、使用 bl 模块
// var fs = require('fs');
// var bl = require('bl');
// var path = process.argv[3];
// require('http').createServer(function (req, res) {
//     var str = '';

//     fs.createReadStream(path, {
//         defaultEncoding: 'utf8'
    
//     }).pipe(bl(function (err, data) {
//         if (err) {
//             return console.log(err);
//         }

//         res.end(data.toString());
//     }));

// }).listen(Number(process.argv[2]));


// 官方：
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  // 卧槽 还能这么用，吓老子一跳
  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))


// 总结：
// 由以上三个步骤可以简单看出：
// node stream的pipe，实际上猜测是一步步将获取的数据传输给下一个对象函数，传输完成，调用下一个对象函数的end
// readable.pipe(writable);
