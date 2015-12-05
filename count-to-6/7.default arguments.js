// 函数的默认参数值设定
// module.exports = function (x = 0, y = 1) {
//     return (x + y) / 2;
// };

// 不需要考虑 this， 箭头函数更方便
module.exports = (x = 0, y = 1) => (x + y) / 2;