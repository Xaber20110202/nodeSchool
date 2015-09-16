// require('fs').readFile(process.argv[2], function (err, data) {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data.toString().split('\n').length - 1);
//     }
// });

// or 
require('fs').readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) {
        throw err;
    } else {
        console.log(data.split('\n').length - 1);
    }
});

// 知识点：
// 1. readFile callback 在最后一个参数
// 2. readFile utf8 参数在第二位，参数传递后返回string 而 不是Buffer