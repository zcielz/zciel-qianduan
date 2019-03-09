// 默认得到的是对象
// 使用对象中的成员必须 . 点儿某个成员来访问
// 有时候，对于一个模块，我仅仅就是希望导出一个方法就可以了

var fooExports = require('./01.foo')
// fooExports.add(1, 2);

console.log(fooExports);

/*
let fooExports1 = fooExports(1, 2);
console.log(fooExports1);*/

console.log(fooExports.str);
