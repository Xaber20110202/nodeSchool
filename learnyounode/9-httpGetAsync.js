// 一、递归做法
// 发现现在的想法思路越来越函数式了
// 反而会把简单的功能往复杂了去做
// var http = require('http');

// var helper = function (str, url, next) {
//     http.get(url, function (res) {
//         res.setEncoding('utf8').on('data', function (chunk) {
//             str += chunk;
//         }).on('end', function () {
//             next(str);
//         });
//     });
// };

// var recursion = function (urls, str, index) {
//     str = str ? str : '';
//     index = index ? index : 0;

//     // 这里的 str 是helper 函数处理完后接收的
//     helper(str, urls[index], function (str) {
//         console.log(str);

//         index += 1;
//         if (index < urls.length) {
//             recursion(urls, '', index);
//         }
//     });
// };

// recursion(process.argv.slice(2));



// 二、简单做法： 官方做法
// var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0

//     function printResults () {
//       for (var i = 0; i < 3; i++)
//         console.log(results[i])
//     }

//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err)
//             return console.error(err)

//           // 按照顺序存好就好了
//           results[index] = data.toString()
//           count++

//           if (count == 3)
//             printResults()
//         }))
//       })
//     }

//     for (var i = 0; i < 3; i++)
//       httpGet(i)



// 三、使用 async.eachSeries
var http = require('http');
var helper = function (str, url, next) {
    http.get(url, function (res) {
        res.setEncoding('utf8').on('data', function (chunk) {
            str += chunk;
        }).on('end', function () {
            next(str);
        });
    });
};
require('async').eachSeries(process.argv.slice(2), function (url, next) {
    helper('', url, function (str) {
        console.log(str);
        // 必须要调用next
        // http://stackoverflow.com/questions/19079182/asyncjs-eachseries-doesnt-iterate-through-all-items-in-array
        // 猜测： 因为这个方法是将异步调用顺序执行，因此，将下一步的调用放到了上一步结束后的callback即next中 赞
        next();
    });
});