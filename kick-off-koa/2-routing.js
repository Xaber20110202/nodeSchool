// 2-路由
// 1. 其实这么写根本不叫什么路由
// var koa = require('koa');

// var app = koa();

// app.use(function * () {
//     if (this.path === '/') {
//         this.body = 'hello koa';
//     } else if (this.path === '/404') {
//         this.body = 'page not found';
//     } else if (this.path === '/500') {
//         this.body = 'internal server error';
//     }
// });

// app.listen(process.argv[2]);


// 2. 官方例子
// var koa = require('koa');
// var app = koa();
// app.use(function * (next) {
//     if (this.path !== '/') {
//         return yield next;
//     }
//     this.body = 'hello koa';
// });

// app.use(function * (next) {
//     if (this.path !== '/404') {
//         return yield next;
//     }
//     this.body = 'page not found';
// });

// app.use(function * (next) {
//     if (this.path !== '/500') {
//         return yield next;
//     }
//     this.body = 'internal server error';
// });

// app.listen(process.argv[2]);

// 3. 使用 koa-router 库
var app = require('koa')();
var router = require('koa-router')();

router.get('/', function * (next) {
    this.body = 'hello koa';
});

router.get('/404', function * (next) {
    this.body = 'page not found';
});

router.get('/500', function * (next) {
    this.body = 'internal server error';
});

app.use(router.routes());

app.listen(process.argv[2]);


