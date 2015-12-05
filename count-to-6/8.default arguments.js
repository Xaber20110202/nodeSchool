// 想复杂了，以为示例里，要参数是函数
// module.exports = (str, num = str => str.length) => 
//     str + '!'.repeat(typeof num !== 'number' ? num(str) : num);

module.exports = (str, num = str.length) => str + '!'.repeat(num);

