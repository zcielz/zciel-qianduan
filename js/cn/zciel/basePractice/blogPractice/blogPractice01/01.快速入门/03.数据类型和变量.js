// Number
// JavaScript不区分整数和浮点数，统一用Number表示，以下都是合法的Number类型：

// 第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
// 第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。
// 由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用===比较。
// 另一个例外是NaN这个特殊的Number与所有其他值都不相等，包括它自己：
console.log(NaN === NaN)

// 唯一能判断NaN的方法是通过isNaN()函数：
console.log(isNaN(NaN));


// null和undefined
// null表示一个“空”的值，它和0以及空字符串''不同，0是一个数值，''表示长度为0的字符串，而null表示“空”。
// 在其他语言中，也有类似JavaScript的null的表示，例如Java也用null，Swift用nil，Python用None表示。但是，在JavaScript中，还有一个和null类似的undefined，它表示“未定义”。
// JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用null。undefined仅仅在判断函数参数是否传递的情况下有用。

// 数组
// 数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。例如：
var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr[0]);
console.log(arr[3]);

// 对象
// JavaScript的对象是一组由键-值组成的无序集合
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijin',
    hasCar: true,
    zipcode: null
};
// JavaScript对象的键都是字符串类型，值可以是任意数据类型。上述person对象一共定义了6个键值对，其中每个键又称为对象的属性，例如，person的name属性为'Bob'，zipcode属性为null。
// 要获取一个对象的属性，我们用对象变量.属性名的方式：
console.log(person.name);
console.log(person.zipcode);

// 变量
// 变量的概念基本上和初中代数的方程变量是一致的，只是在计算机程序中，变量不仅可以是数字，还可以是任意数据类型。
// 变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、$和_的组合，且不能用数字开头。变量名也不能是JavaScript的关键字，如if、while等。申明一个变量用var语句

// 如果一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量：
// 使用var申明的变量则不是全局变量，它的范围被限制在该变量被申明的函数体内（函数的概念将稍后讲解），同名变量在不同的函数体内互不冲突。