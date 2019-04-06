// 在JSON中，一共就这么几种数据类型：
//
// number：和JavaScript的number完全一致；
// boolean：就是JavaScript的true或false；
// string：就是JavaScript的string；
// null：就是JavaScript的null；
// array：就是JavaScript的Array表示方式——[]；
// object：就是JavaScript的{ ... }表示方式。
// 以及上面的任意组合。
//
// 并且，JSON还定死了字符集必须是UTF-8，表示多语言就没有问题了。为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。

'use strick';

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

var s = JSON.stringify(xiaoming);
console.log(s)

// 要输出得好看一些，可以加上参数，按缩进输出：
console.log(JSON.stringify(xiaoming, null, '  '))

// 第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array：
console.log(JSON.stringify(xiaoming, ['name', 'skills'], '  '))

// 还可以传入一个函数，这样对象的每个键值对都会被函数先处理
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

console.log(JSON.stringify(xiaoming, convert, '  '));


// 如果我们还想要精确控制如何序列化小明，可以给xiaoming定义一个toJSON()的方法，直接返回JSON应该序列化的数据：
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};

console.log(JSON.stringify(xiaoming));


// 反序列化
// 拿到一个JSON格式的字符串，我们直接用JSON.parse()把它变成一个JavaScript对象：
let parse = JSON.parse('{"name":"小明","age":14}');
console.log(parse);
console.log(parse.name);
// JSON.parse()还可以接收一个函数，用来转换解析出的属性：
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}
