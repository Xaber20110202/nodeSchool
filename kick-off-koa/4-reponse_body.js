// koa 的body 支持格式：
// * Strings
// * Buffers
// * Streams (node)
// * JSON Objects

var app = require('koa')();
var fs = require('fs');

app.use(function * (next) {
    if (this.path !== '/json') {
        return yield next;
    }

    this.body = {
        foo: 'bar'
    };
});

app.use(function * (next) {
    if (this.path !== '/stream') {
        return yield next;
    }

    this.body = fs.createReadStream(process.argv[3]);
});

app.listen(process.argv[2]);