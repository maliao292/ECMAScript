/*
* 原型模式中，this的常用两种情况：
*   在类中this.XXX = xxx; =>当前类的实例
*   在某方法中的this => 在执行的时候"."前面是谁 this 就是谁
*
*   1)先确定this 的指向 （this是指谁）
*   2）把this替代成相应的代码
*   3）按照原型链的机制，一步一步的查找结果
* */

function Fn() {
    this.x = 100;
    this.y = 200;
    this.getY = function () {
        cosole.log(this.y)
    }
}

Fn.prototype = {
    constructor: Fn,
    y: 300,
    getX: function () {
        cosole.log(this.x)
    },
    getY: function () {
        cosole.log(this.y)
    },
};

var f = new Fn;
f.getX();  // 100
f.__proto__.getX(); // underfind
