//密封对象不可扩展，且不能删除属性和方法
let person = {name: 'addone'};
Object.seal(person);

person.age = 20; //这个不能添加
console.log(person)
delete person.name; //这个不能删除
console.log(person)

//相对的也有Object.isSealed()来判断是否密封
console.log(Object.isExtensible(person))
console.log(Object.isSealed(person))
