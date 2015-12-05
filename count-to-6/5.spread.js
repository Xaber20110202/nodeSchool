// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
// 相当于数组项展开，并作为值和参数来传递
var numbers = process.argv.slice(2);

console.log(`The minimum of [${numbers}] is ${Math.min(...numbers)}`);