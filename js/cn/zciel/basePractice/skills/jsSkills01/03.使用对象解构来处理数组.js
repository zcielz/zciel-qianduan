//可以使用对象解构的语法来获取数组的元素
const csvFileLine = '1997,John Doe,US,john@doe.com,New York';
const {2: country, 4: state} = csvFileLine.split(','); //获得第2位和第4位（从0开始算）

console.log(country);
console.log(state);