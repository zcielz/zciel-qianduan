var foo = 'bar'

function add(x, y) {
    return x + y;
}

//这种方式不行
// exports = add
// 如果一个模块需要直接导出某个成员，而非挂载的方式
// 那这个时候必须使用下面这种方式

module.exports = 'hello'

module.exports = function (x, y) { //如果上面的还存在 以这个为标准
    return x + y
}

module.exports = {
    add: function () {
        return x + y;
    },
    str: 'hello'
}


