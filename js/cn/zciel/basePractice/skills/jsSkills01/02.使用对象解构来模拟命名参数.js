//如果你需要将一系列可选项作为参数传入函数，那么你也许倾向于使用了一个对象(Object)来定义配置(Config)。

doSomething({foo: 'hello', bar: 'Hey!', baz: 42});

function doSomething(config) {
    const foo = config.foo !== undefined ? config.foo : 'Hi';
    const bar = config.bar !== undefined ? config.bar : 'hey';
    const baz = config.baz !== undefined ? config.baz : '12';
    console.log(foo);
    console.log(bar);
    console.log(baz);
}

//这是一个陈旧、但是很有效的方法，它模拟了JavaScript中的命名参数。不过呢，在doSomething中处理config的方式略显繁琐。在ES2015中，你可以直接使用对象解构。
function doSomething({foo = 'Hi', bar = 'Yo!', baz = 13}) {
    // ...
}

//如果你想让这个参数是可选的，也很简单。
function doSomething({foo = 'Hi', bar = 'Yo!', baz = 13} = {}) {
    // ...
}