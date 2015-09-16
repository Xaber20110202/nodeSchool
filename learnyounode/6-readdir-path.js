var myModule = require('./6-mymodule');

myModule(process.argv[2], process.argv[3], function (err, list) {
    if (err) {
        console.log(err);
    } else {
        list.forEach(function (file) {
            console.log(file);
        });
    }
});

// 知识点：
// 1. module exports
// 2. 代码封装
// 3. 参数抽取