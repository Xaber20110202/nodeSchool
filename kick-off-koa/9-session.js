// koa-session
var app = require('koa')();
var session = require('koa-session');

app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(function * (next) {
    var times = parseInt(this.session.view);
    times = (times ? times : 0) + 1;

    this.session.view = times;
    this.body = times + ' views';
});

app.listen(process.argv[2]);