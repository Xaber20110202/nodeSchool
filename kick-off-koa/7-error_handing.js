// 中间件  错误处理

var app = require('koa')();

var errorHandle = function () {
    return function *(next) {
        try {
            // we catch all downstream errors here
            // 把所有后续的错误全部catch了
            yield next;
        } catch (e) {
            this.body = 'internal server error';            
            this.status = 500;

            // can emit on app for log
            // this.app.emit('error', err, this);
        }
    };
};

app.use(errorHandle());

app.use(function *(next) {
    if (this.path === '/error') throw new Error('ooops');
    this.body = 'OK';
});

app.listen(process.argv[2]);