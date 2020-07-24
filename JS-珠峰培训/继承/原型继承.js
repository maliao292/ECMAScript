function A() {
	this.x = 100
}

A.prototype.getX = function() {
	console.log(this.x);
}

function B() {}
B.prototype = new A
let b = new B
console.log(b);
