// 函数绑定
//
// 请使用fun.bind(thisArg[, arg1[, arg2[, ...]]])
//
// thisArg
//
// 当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用new 操作符调用绑定函数时，该参数无效
//
// arg1,arg2,...
//
// 当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法

/*
let person = {
    name: 'addone',
    click: function(e){
        console.log(this.name)
    }
}

let btn = document.getElementById('btn')
EventUtil.addHandle(btn, 'click', person.click);*/
//这里创建了一个person对象，然后将person.click方法分配给DOM按钮的事件处理程序，当你点击按按钮时，会打印出undefiend，原因是执行时this指向了DOM按钮而不是person
//解决方案： 将this强行指向person
//EventUtil.addHandle(btn, 'click', person.click.bind(person));



