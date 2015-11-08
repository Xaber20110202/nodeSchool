// this.request.type
// this.request.length
// this.response.type
// this.response.length
// this.request.is('image/*') // => image/png
// this.request.is('text') // => text or false

var app = require('koa')();

// app.use(function * (next) {
//     if (!this.request.is('application/json')) {
//         return yield next;
//     }

//     this.body = {
//         message: 'hi!'
//     };
// });

// app.use(function * () {
//     this.body = 'ok';
// });

// 官方： 只有两种情况，没有报错的情况，就无需分开了
app.use(function * (next) {
    this.body = this.request.is('json') ? {
            message: 'hi!'
        } : 'ok';
});

app.listen(process.argv[2]);