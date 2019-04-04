'use strict';

// 由于map()方法定义在JavaScript的Array中，我们调用Array的map()方法，传入我们自己的函数，就得到了一个新的Array作为结果：
function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow);
console.log(results);
// 注意：map()传入的参数是pow，即函数对象本身。

// reduce
// 再看reduce的用法。Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算，其效果就是：
var arr = [1, 3, 5, 7, 9];
let reduce = arr.reduce(function (x, y) {
    return x + y;
});
console.log(reduce);

let reduce1 = arr.reduce(function (x, y) {
    return x * 10 + y;
});
console.log(reduce1);
