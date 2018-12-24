/*
* javascript 原型模式（prototype）
* 原型是一个对象，其他的对象可以通过他 实现继承
* 所有的对象在默认情况下都有一个原型，因为原型本身也是对象
* */
(function () {
    function person() {
    }

    person.prototype.name = 'USPCAT.COM'
    person.prototype.showname = function () {
        // 这个 this 表示调用本函数的的  实例化类
     //   console.log(this.name);
    }
    new person().showname();

    var cat = {};

    Object.getPrototypeOf(cat).name = 'MAOMI';

    cat.__proto__.master = 'MARIO'
// 测试
    cat.age = 2;
    cat['sex'] = 'MAN ';
    /*console.log(cat.name);
    console.log(cat.master);
    console.log(cat.__proto__);*/

    /*
    * 利用原型 实现 继承
    * */

    function per() {
        this.getName = function (str) {
            console.log(str)
        }
    }

    per.prototype.getAge = function (age) {
        console.log(age);
    }
    var a = {};
    a['b'] = 9;
    a.__proto__.c = 15;
    a.__proto__ = per.prototype;
  //  console.log(a.getName(56)); ERR

    var b = {};
    b.__proto__ = new per();
    b.__proto__.constructor = b;
    b.getName('wangwagn')

    /* 串联继承
    * n 继承 m
    * k 继承 n
    *
    * m => n => k
    * */
    function m() {
        this.showm = function () {
            console.log('我是 m');
        };
    }
    function n() {
        this.shown = function () {
            console.log('我是 n');
        };

    }

    function k() {};
    n.prototype = new m();
    n.prototype.constructor = n;

    k.prototype = new n();
    k.prototype.constructor = k;

    var f = new k();
    f.showm();
    f.shown();
})();