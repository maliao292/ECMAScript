// export 原始输出

export var firstName = 'Mario';
export var lastName = 'MaLiAo';
export var year = 1988;

/**
 * 以上可以改为
 * */
/****
 * var firstName = 'Mario';
 * var lastName = 'MaLiAo';
 * var year = 1988;
 *
 * export {firstName,lastName,year}
 *
 * **/

// 也可输出函数
export function add(a, b) {
    console.log(a + b)
}



function sub(a,b) {
    console.log(b-a)
}

export {sub as jian};


// 500ms 后改变值

export var foo = 'bar';
setTimeout(()=> foo = 'baz',500 );