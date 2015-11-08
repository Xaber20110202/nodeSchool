// 知识点：
// require('child_process').spawn用于处理执行cmd和args的命令行命令，返回一个 !!!process!!! 对象
// 感谢： child-process http://www.graemeboy.com/node-child-processes

// 

var duplexer2 = require('duplexer2'),
    spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
    console.log(cmd, args);
    var proc = spawn(cmd, args);
    return duplexer2(proc.stdin, proc.stdout);
};