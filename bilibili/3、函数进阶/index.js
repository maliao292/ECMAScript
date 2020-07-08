// function f() {}
var f = new Function('a','b','console.log(a+b)');
f(1,2)
console.dir(f);