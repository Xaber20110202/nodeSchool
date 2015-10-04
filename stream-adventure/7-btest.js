// 知识点：
// createWriteStream、req、res 都是Stream类型

var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(fs.createWriteStream('post.txt'));
    }
    res.end('beep boop\n');
});
server.listen(process.argv[2]);