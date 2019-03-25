//这是最严格的防篡改级别，冻结的对象即不可扩展，又密封，且不能修改
let person = {name: 'addone'};
Object.freeze(person);

person.age = 20;
delete person.name;
person.name = 'addtwo'

console.log(person.age)
console.log(person.name)

