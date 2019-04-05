// for ... in
// for循环的一个变体是for ... in循环，它可以把一个对象的所有属性依次循环出来：
var o = {
    name: 'jack',
    age: 10,
    city: 'beijin'
};
for (var key in o) {
    console.log(key);
}

for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key);
        console.log(o[key]);
    }
}