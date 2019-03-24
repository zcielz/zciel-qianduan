// JSON.stringify不止可以将一个对象字符化，还可以格式化输出JSON对象。
const obj = {
    foo: {bar:[11,22,33,44], baz: {bing: true, boom: 'hello'}}
};
console.log(obj)
JSON.stringify(obj, null, 4);

console.log(obj)
