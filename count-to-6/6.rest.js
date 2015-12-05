// rest参数中的变量代表一个数组，所以数组特有的方法都可以用于这个变量
// 第5个 是将 ...numbers 变量展开
// 而这个 是将 分散开的参数值 聚合成数组
module.exports = function (...args) {
    return args.reduce((memo, value) => memo + value) / args.length;
};