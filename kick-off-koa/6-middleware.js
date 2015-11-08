// 中间件
// 这个真的确实是叼，耦合算是降到最低。而且代码优雅，简直神器

var app = require('koa')();

var responseTime = function () {
    return function * (next) {
        var start = Date.now();
        yield next;
        this.set('X-Response-Time', Date.now() - start + 'ms');
    };
};

var upperCase = function () {
    return function * (next) {
        yield next;
        this.body = this.body.toUpperCase();
    };
};

app.use(responseTime());
app.use(upperCase());

app.use(function * () {
    this.body = 'hello koa';
});

// ==> HELLO KOA
app.listen(process.argv[2]);