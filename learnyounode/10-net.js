// 知识点：
// net 模块 socket.write  socket.end
// 回顾： process.argv 数组项是字符串
var toDouble = function (num) {
    return ('' + num).length < 2 ? '0' + num : '' + num;
};
require('net').createServer(function (socket) {
    var oDate = new Date();

    socket.write('' + oDate.getFullYear() + '-' +
        toDouble(oDate.getMonth() + 1) + '-' +
        toDouble(oDate.getDate()) + ' ' +
        toDouble(oDate.getHours()) + ':' +
        toDouble(oDate.getMinutes())
    );

    socket.end('\n');
}).listen(Number(process.argv[2]));