function Star(name,age){
    this.name = name;
    this.age = age
}
// this 是实例成员 只能通过实例化的对象访问
// 静态成员 私有属性
Star.prototype.sing = function () {
    console.log('唱个歌');
}
let ldh = new Star('刘德华',50);
ldh.sing();
console.log(ldh);


/**
 *
 * */
console.log(ldh.__proto__ === Star.prototype); // true
/*
* call 继承
* */



