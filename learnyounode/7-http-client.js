require('http').get(process.argv[2], function (res) {
    res.setEncoding('utf8').on('data', console.log).on('error', console.error);
});

// 知识点：
// 1. http.get
// 2. response 是一个 Stream 类型
// 3. response.setEncoding
// 4. response.on('data', callback).('error', callback);
// 5. 函数式调用 直接传参 console.log