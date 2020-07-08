function fun(text){
    console.log(text)
    console.log(this.name)

}
fun.call(null,678);
let o = {
    name:'mario'
}
fun.call(o,678);
/*
*  call
* 1、 调用函数
* 2、 修改this (不能继承原型对象（Father.prototype）的方法，只能继承构造函数(Father)的方法)
* 3、 继承
* */
Father.prototype.sing = function () {
    console.log('唱个歌');
}
function Father(uname,age) {
    this.uname = uname;
    this.age = age;
    this.init = function(){
        console.log(this.age * 10);
    }
}
function  Son(uname,age) {
    Father.call(this,uname,age);
}
// Son.prototype = Father.prototype; // 污染父原型对象
Son.prototype = new Father();
Son.prototype = Son();
var son =  new Son('刘德华',19);
son.init();
son.sing();