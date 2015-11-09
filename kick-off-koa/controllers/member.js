var render = require('co-views')(__dirname + '/views', {
    ext: 'ejs'
});

var parse = require('co-body');

var home = function * (next) {
    if (this.path !== '/') return yield next;

    if (!this.session.authenticated) return this.throw(401);

    this.body = 'hello world';
};

var loginGet = function * (next) {
    this.body = render('form');
};

var loginPost = function * (next) {
    var body = yield parse(this, {
        limit: '1kb'
    });

    if (body.username !== 'username' || body.password !== 'password') {
        this.throw(400);
    }

    this.session.authenticated = true;
    return this.redirect('/');
};

var logout = function * (next) {
    this.session.authenticated = '';
    return this.redirect('/login');
};

var normal = function * (next) {
    return this.throw(400);
};

exports.home = home;
exports.loginGet = loginGet;
exports.loginPost = loginPost;
exports.logout = logout;
exports.normal = normal;