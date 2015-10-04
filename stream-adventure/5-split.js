// 知识点：
// 1. split 模块 https://www.npmjs.com/package/split
// 2. console.dir

process.stdin
    .pipe(require('split')())
    .pipe(require('through2')(function (line, _, next) {
        console.dir(line.toString());
        next();
    }));