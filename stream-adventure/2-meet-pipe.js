// 知识点：
// process.stdout也是一个stream
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);