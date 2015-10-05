// 知识点：
// 1. websocket-stream 模块使用 https://github.com/maxogden/websocket-stream
// 2. pipe 和 write、end等的区别需要搞清楚，pipe接受的参数也是一个Stream类型

require('websocket-stream')('ws://localhost:8099').end('hello\n');