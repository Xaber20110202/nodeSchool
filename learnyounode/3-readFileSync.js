console.log(require('fs').readFileSync(process.argv[2]).toString().split('\n').length - 1);

// 知识点：
// 1. process.argv 数组
// 2. readFileSync 同步方法
