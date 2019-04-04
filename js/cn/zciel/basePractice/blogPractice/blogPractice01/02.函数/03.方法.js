// 在一个对象中绑定函数，称为这个对象的方法。
// 在JavaScript中，对象的定义是这样的：
var xiaoming = {
    name: 'xiaoming',
    birth: 1992
};

// 但是，如果我们给xiaoming绑定一个函数，就可以做更多的事情。比如，写个age()方法，返回xiaoming的年龄：
var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

console.log(xiaoming.age);
console.log(xiaoming.age());

// 在一个方法内部，this是一个特殊变量，它始终指向当前对象，也就是xiaoming这个变量。所以，this.birth可以拿到xiaoming的birth属性。
// 让我们拆开写：
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: getAge
};

console.log(xiaoming.age());
console.log(getAge());
// 如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming，这是符合我们预期的。
// 如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。

// 如果这么写
var fn = xiaoming.age; // 先拿到xiaoming的age函数
console.log(fn());
//要保证this指向正确，必须用obj.xxx()的形式调用！
//在strict模式下让函数的this指向undefined，因此，在strict模式下，你会得到一个错误

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth;
        }

        return getAgeFromBirth();
    }
};
console.log(xiaoming.age());
// 结果又报错了！原因是this指针只在age方法的函数内指向xiaoming，在函数内部定义的函数，this又指向undefined了！（在非strict模式下，它重新指向全局对象window！）
// 修复的办法也不是没有，我们用一个that变量首先捕获this：
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }

        return getAgeFromBirth();
    }
};
console.log(xiaoming.age());

// apply
// 虽然在一个独立的函数调用中，根据是否是strict模式，this指向undefined或window，不过，我们还是可以控制this的指向的！
// 要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
// 用apply修复getAge()调用：
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: getAge
};

console.log(xiaoming.age());
console.log(getAge.apply(xiaoming, []));


// 另一个与apply()类似的方法是call()，唯一区别是：
// apply()把参数打包成Array再传入；
// call()把参数按顺序传入。
// 比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：
console.log(Math.max.apply(null, [3, 5, 4]));
console.log(Math.max.call(null, 3, 5, 4));
// 对普通函数调用，我们通常把this绑定为null。

// 装饰器
// 利用apply()，我们还可以动态改变函数的行为。
// JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。
// 现在假定我们想统计一下代码一共调用了多少次parseInt()，可以把所有的调用都找出来，然后手动加上count += 1，不过这样做太傻了。最佳方案是用我们自己的函数替换掉默认的parseInt()：
var count = 0;
var oldParseInt = parseInt; //保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};
parseInt('10')

