var fs = require('fs'),
    extname = require('path').extname;

var bar = function (path, ext, callback) {
    var newList = [];

    ext = '.' + ext;
    fs.readdir(path, function (err, list) {
        if (err) {
            return callback(err);
        } else {
            list.forEach(function (file) {
                if (extname(file) === ext) {
                    newList.push(file);
                }
            });
            return callback(null, newList);
        }
    });
};

module.exports = bar;