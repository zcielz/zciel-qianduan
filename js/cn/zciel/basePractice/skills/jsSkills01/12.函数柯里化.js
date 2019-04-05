// 函数柯里化
// 函数柯里化是把接受多个参数的函数转变成接受单一参数的函数

function add(num1, num2) {
    return num1 + num2;
}

function curryAdd(num2) {
    return add(1, num2);
}

console.log(add(2, 3));
console.log(curryAdd(2));

// 下面是创建函数柯里化的通用方式
function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        let innerArgs = Array.prototype.slice.call(arguments);
        let finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    }
}

// 第一个参数是要进行柯里化的函数，其他参数是要传入的值。这里使用Array.prototype.slice.call(arguments, 1)来获取第一个参数后的所有参数(外部)。
// 在返回的函数中，同样调用Array.prototype.slice.call(arguments)让innerArgs来存放所有的参数(内部)，然后用concat将内部外部参数组合，用apply传递给函数
function add(num1, num2) {
    return num1 + num2;
}

let curryAdd1 = curry(add, 1);
console.log(curryAdd1(2));

let curryAdd2 = curry(add, 1, 2);
console.log(curryAdd2());