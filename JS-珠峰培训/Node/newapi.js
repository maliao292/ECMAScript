var less = require('./less');
less.render(" ")

// 让JS在node 中执行
function sum() {
    var total = null;
    for (var i = 0;i<arguments.length;i++){
        var cur = arguments[i];
        if(!isNaN(cur)){
            total += cur;
        }
    }
    return total;
}


var total = sum(1,1,2,5,8,5,9);
console.log(total);