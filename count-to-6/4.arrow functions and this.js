// this指向的固定化，并不是因为箭头函数内部有绑定this的机制，
// 实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
// 正是因为它没有this，所以也就不能用作构造函数。

// 这就是箭头函数和普通函数的区别，直接用的外层作用域的this

var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(() => console.log(this.yelp));
    }
};
foot.kick();