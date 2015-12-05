// 箭头函数 http://es6.ruanyifeng.com/#docs/function

var inputs = process.argv.slice(2);

// 方法一：较丑
// console.log(
//     '[' + inputs.toString() + ']' + ' becomes \"' +
//     inputs
//         .map(x => x.charAt(0))
//         .reduce((memo, value) => memo + value) + 
//     '\"');

// 方法二：更优雅的实现
var result = inputs
        .map(x => x.charAt(0))
        .reduce((memo, value) => memo + value);

console.log(`[${inputs}] becomes "${result}"`);