// 知识点：
// createReadStream、req、res 都是Stream类型
// 运行 node 7-atest.js 8000
// 访问 localhost:8000

var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    fs.createReadStream('./7-file.txt').pipe(res);
});
server.listen(process.argv[2]);