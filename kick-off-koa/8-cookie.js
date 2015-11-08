var app = require('koa')();

// 可能类似给cookie加密的东西
app.keys = ['views'];

app.use(function * (next) {
    if (this.path !== '/') {
        return yield next;
    }

    var times = parseInt(this.cookies.get('view', {
        signed: true
    }));
    times = (times ? times : 0) + 1;

    this.cookies.set('view', times, {
        signed: true
    });

    this.body = times + ' views';
});

app.listen(process.argv[2]);


// ——————————————————————————————————————————————
// 官方例子
// var koa = require('koa');

// var app = koa();

// // to use signed cookie, we need to set app.keys
// app.keys = ['secret', 'keys'];

// app.use(function *(){
//   var n = ~~this.cookies.get('view', { signed: true }) + 1;
//   this.cookies.set('view', n, { signed: true });
//   this.body = n + ' views';
// });

// app.listen(process.argv[2]);