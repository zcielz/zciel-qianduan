// 你可以创建一个100%的纯对象，他不从Object中继承任何属性或则方法（比如，constructor，toString()等等）。
const pureObject = Object.create(null);
console.log(pureObject); //[Object: null prototype] {}
console.log(pureObject.constructor); //undefined
console.log(pureObject.toString); //undefined
console.log(pureObject.hasOwnProperty); //undefined

//这种不常用