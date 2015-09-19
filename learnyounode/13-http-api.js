// 知识点：
// request.url
// url模块 url.parse

// 一、
// var http = require('http');
// var url = require('url');

// http.createServer(function(req, res) {
//     var parsed = url.parse(req.url, true);
//     var pathname = parsed.pathname;
//     var oDate = new Date(parsed.query.iso);
//     var result;

//     if (pathname === '/api/parsetime') {
//         result = {
//             hour: oDate.getHours(),
//             minute: oDate.getMinutes(),
//             second: oDate.getSeconds()
//         };

//     } else if (pathname === '/api/unixtime') {
//         result = {
//             unixtime: oDate.getTime()
//         };
//     }

//     if (result) {
//         res.writeHead(200, {
//             'Content-Type': 'application/json'
//         });

//         res.end(JSON.stringify(result));

//     } else {
//         res.writeHead(404);
//         res.end();
//     }

// }).listen(Number(process.argv[2]));



// 二、官方
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))