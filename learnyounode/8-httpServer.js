// 方案一 手写
// 知识点：
// 1. response.on('end')

// require('http').get(process.argv[2], function (res) {
//     var result = '';
//     res.setEncoding('utf8').on('data', function (chunk) {
//         result += chunk;
//     })
//     .on('error', console.error)
//     .on('end', function () {
//         console.log(result.length);
//         console.log(result);
//     });
// });



// 方案2 bl https://github.com/rvagg/bl
// 知识点 response.pipe response是一个Stream类型
// var bl = require('bl');

// require('http').get(process.argv[2], function (res) {
//     res.pipe(bl(function (err, data) {
//         if (err) {
//             return console.log(err);
//         }

//         data = data.toString();
//         console.log(data.length);
//         console.log(data);
//     }));
// });



// 方案3 concat-stream
// 区别于 bl，callback
// 没有error参数，没有错误处理
var concat = require('concat-stream');
require('http').get(process.argv[2], function (res) {
    // ！！！注意！！！ 这里尚且不能执行复杂处理
    res.pipe(concat(function (data) {
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});



