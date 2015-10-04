// 知识点：
// 1. request模块使用 https://github.com/request/request

process.stdin.pipe(require('request').post('http://localhost:8099')).pipe(process.stdout);