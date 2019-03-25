// 防篡改对象
//
// Javascript中任何对象都可以被同一环境中运行的代码修改，所以开发人员有时候需要定义防篡改对象（tamper-proof object) 来保护自己

//不可扩展对象
//默认情况下所有的对象都是可以扩展的（添加属性和方法）
let person = {name: 'addone'};
person.age = 20;
//第二行为person对象扩展了age属性，当然你可以阻止这一行为，使用Object.preventExtensions()
console.log(person);
Object.preventExtensions(person);
person.age = 11;
console.log(person);
person.sex = 'girl';
console.log(person);

//你还可以用Object.isExtensible()来判断对象是不是可扩展的
console.log(Object.isExtensible(person));
