// 3. 处理功能，当然没问题
// var app = require('koa')();
// var parse = require('co-body');

// app.use(function * (next) {
//     var body = yield parse(this);
//     this.body = body.name.toUpperCase();
// });

// app.listen(process.argv[2]);


// 官网例子  越发觉得其实 koa中的generator function 只是用来代替 express中的 error callback
// 具体的处理，需要时刻注意不符合要求的场景，在express中需要处理error，koa中需要使用yield 处理
var app = require('koa')();
var parse = require('co-body');

app.use(function*(next) {
    if (this.method !== 'POST') {
        return yield next;
    }

    // 各种错误处理
    var body = yield parse(this, {
        limit: '1kb'
    });

    if (!body.name) {
        this.throw(400, '.name required');
    }

    this.body = body.name.toUpperCase();
});

app.listen(process.argv[2]);