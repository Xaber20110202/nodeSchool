// process.argv
console.log(process.argv.slice(2).map(function(v) {
    return parseInt(v);
}).reduce(function(memo, num) {
    return memo + num;
}));

// 知识点：
// 1. process.argv 数组 获取命令行参数，第一个参数为node路径，第二个参数为文件，后续依次类推
