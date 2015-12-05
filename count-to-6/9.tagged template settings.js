// 还是模版相关 http://es6.ruanyifeng.com/#docs/string
let replacer = {
    '\'': '&apos;',
    '"': '&quot;',
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;'
};

let reg = new RegExp('(' + Object.keys(replacer).join(')|(') + ')', 'gi');

let replace = x => x.replace(reg, (match, pattern) => replacer[match]);

// 获取处理后的字符串
// 完全的函数式编程与链式操作 棒棒哒
let html = (literals, ...args) =>
    // 借助一一对应的关系
    args.map((value, index) => literals[index] + replace(value)).join('') + 
        literals[args.length];

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);



// 以下是官方
// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

// function html(pieces, ...substitutions) {
//     var result = pieces[0];
//     for (var i = 0; i < substitutions.length; ++i) {
//         result += escape(substitutions[i]) + pieces[i + 1];
//     }

//     return result;
// }

// function escape(s) {
//     return s.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;")
//             .replace(/'/g, "&apos;")
//             .replace(/"/g, "&quot;");
// }