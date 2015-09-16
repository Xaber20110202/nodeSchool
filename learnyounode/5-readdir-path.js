var extname = require('path').extname,
    ext = '.' + process.argv[3];

require('fs').readdir(process.argv[2], function (err, list) {
    if (err) {
        throw err;
    } else {
        list.forEach(function (filename) {
            if (extname(filename) === ext) {
                console.log(filename);
            }
        });
    }
});

// 知识点：
// 1. path.extname 返回文件后缀 包括 .
// 2. fs.readdir 异步。 callback接受一个数组，包含路径下所有文件，包括 ...