/*function want() {
    console.log("want 中代码")
}

function fn(want) {
    console.log("fn(want)");
    return new Promise(function (resolve,reject) {
        if(typeof want == "function"){
            resolve(want);
        } else {
            reject(want + "不是函数")
        }
    })
}

fn(want).then(function (a) {
   a();
});*/
/* 链式 return  */
/*let pro = new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve('res666')
    },1000)
});

pro.then(function (res) {
    console.log(res);
    return 9996
}).then(function (t2) {
    console.log(t2)
});*/

function runAsync1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Async1");
            resolve("promise_1");
        },1000)

    })
}
function runAsync2() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Async2");
            resolve("promise_2");
        },1000)
    })
}
function runAsync3() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Async3");
            resolve("promise_3");
        },1000)
    })
}

runAsync1().then(function (res) {
    console.log(res);
    return runAsync2();
}).then(function (res) {
    console.log(res);
});
var a  = 3;
console.log(a);