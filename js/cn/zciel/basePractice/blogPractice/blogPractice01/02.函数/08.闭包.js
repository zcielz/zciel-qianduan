// 函数作为返回值
// 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。
function sum(arr) {
    return arr.reduce(function (x, y) {
        return x + y;
    });
}

console.log(sum([1, 2, 3, 4, 5]));

function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}

var f = lazy_sum([1, 2, 3, 4, 5]);
console.log(f());

// 在这个例子中，我们在函数lazy_sum中又定义了函数sum，并且，内部函数sum可以引用外部函数lazy_sum的参数和局部变量，当lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）”的程序结构拥有极大的威力。
// 再注意一点，当我们调用lazy_sum()时，每次调用都会返回一个新的函数，即使传入相同的参数

var f1 = lazy_sum([1, 2, 3, 4, 5])
var f2 = lazy_sum([1, 2, 3, 4, 5])
console.log(f1 === f2);

// 闭包
// 注意到返回的函数在其定义内部引用了局部变量arr，所以，当一个函数返回了一个函数后，其内部的局部变量还被新函数引用，所以，闭包用起来简单，实现起来可不容易。
// 另一个需要注意的问题是，返回的函数并没有立刻执行，而是直到调用了f()才执行。
function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1(), f2(), f3());

// 全部都是16！原因就在于返回的函数引用了变量i，但它并非立刻执行。等到3个函数都返回时，它们所引用的变量i已经变成了4，因此最终结果为16。
// 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
// 如果一定要引用循环变量怎么办？方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变：
function count1() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count1();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1(), f2(), f3());

// 注意这里用了一个“创建一个匿名函数并立刻执行”的语法：
var a = (function (x) {
    return x * x
}(3));
console.log(a)

// 说了这么多，难道闭包就是为了返回一个函数然后延迟执行吗？
// 当然不是！闭包有非常强大的功能。举个栗子：
// 在面向对象的程序设计语言里，比如Java和C++，要在对象内部封装一个私有变量，可以用private修饰一个成员变量。
// 在没有class机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量。我们用JavaScript创建一个计数器：
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}

var c1 = create_counter();
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.inc());

var c2 = create_counter(10);
console.log(c2.inc());
console.log(c2.inc());
console.log(c2.inc());

// 在返回的对象中，实现了一个闭包，该闭包携带了局部变量x，并且，从外部代码根本无法访问到变量x。换句话说，闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。
//
// 闭包还可以把多参数的函数变成单参数的函数。例如，要计算xy可以用Math.pow(x, y)函数，不过考虑到经常计算x2或x3，我们可以利用闭包创建新的函数pow2和pow3：
function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5)); // 25
console.log(pow3(7)); // 343