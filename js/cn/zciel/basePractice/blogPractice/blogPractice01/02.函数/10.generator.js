function foo(x) {
    return x + x;
}

var r = foo(1);
console.log(r);

// 函数在执行过程中，如果没有遇到return语句（函数末尾如果没有return，就是隐含的return undefined;），控制权无法交回被调用的代码。
function* foo(x) {
    yield x + 1;
    yield x + 2;
    yield x + 3;
}

// generator和函数不同的是，generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次。
// 斐波那契数列为例
function fib(max) {
    var t,
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr;
}

console.log(fib(100));

// 函数只能返回一次，所以必须返回一个Array。但是，如果换成generator，就可以一次返回一个数，不断返回多次。用generator改写如下：
function* fib(max) {
    var t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n++;
    }
    return;
}

console.log(fib(10))
// 直接调用一个generator和调用函数不一样，fib(5)仅仅是创建了一个generator对象，还没有去执行它。
//
// 调用generator对象有两个方法，一是不断地调用generator对象的next()方法：
var f = fib(4);
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())

// next()方法会执行generator的代码，然后，每次遇到yield x;就返回一个对象{value: x, done: true/false}，然后“暂停”。返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。如果done为true，则value就是return的返回值。
//
// 当执行到done为true时，这个generator对象就已经全部执行完毕，不要再继续调用next()了。
//
// 第二个方法是直接用for ... of循环迭代generator对象，这种方式不需要我们自己判断done：

for (var x of fib(10)) {
    console.log(x)
}


// generator和普通函数相比，有什么用？
//
// 因为generator可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，利用这一点，写一个generator就可以实现需要用面向对象才能实现的功能。例如，用一个对象来保存状态，得这么写：
var fib = {
    a: 0,
    b: 1,
    n: 0,
    max: 5,
    next: function () {
        var r = this.a,
            t = this.a + this.b;
        this.a = this.b;
        this.b = t;
        if (this.n < this.max) {
            this.n++;
            return r;
        } else {
            return undefined;
        }
    }
}


// 用对象的属性来保存状态，相当繁琐。
//
// generator还有另一个巨大的好处，就是把异步回调代码变成“同步”代码。这个好处要等到后面学了AJAX以后才能体会到。
//
// 没有generator之前的黑暗时代，用AJAX时需要这么写代码：
//
// ajax('http://url-1', data1, function (err, result) {
//     if (err) {
//         return handle(err);
//     }
//     ajax('http://url-2', data2, function (err, result) {
//         if (err) {
//             return handle(err);
//         }
//         ajax('http://url-3', data3, function (err, result) {
//             if (err) {
//                 return handle(err);
//             }
//             return success(result);
//         });
//     });
// });
// 回调越多，代码越难看。
//
// 有了generator的美好时代，用AJAX时可以这么写：
//
// try {
//     r1 = yield ajax('http://url-1', data1);
//     r2 = yield ajax('http://url-2', data2);
//     r3 = yield ajax('http://url-3', data3);
//     success(r3);
// }
// catch (err) {
//     handle(err);
// }