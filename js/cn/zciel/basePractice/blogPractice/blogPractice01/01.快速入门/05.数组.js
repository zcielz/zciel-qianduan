// JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。
// // 要取得Array的长度，直接访问length属性：

var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr.length)

// 请注意，直接给Array的length赋一个新的值会导致Array大小的变化：
var arr = [1, 2, 3];
console.log(arr.length)
arr.length = 6;
console.log(arr);
arr.length = 2;
console.log(arr);

// Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array：
var arr = ['A', 'B', 'C', 'D'];
arr[1] = 99;
console.log(arr);

// 请注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化：
var arr = [1, 2, 3];
arr[5] = 'x';
console.log(arr);

// 大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript的Array却不会有任何错误。在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。

// indexOf
// 与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置：

// slice
// slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array：
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(arr.slice(0, 3));
console.log(arr);
console.log(arr.slice(3)); // 从索引3开始到结束: ['D', 'E', 'F', 'G']

// push和pop
// push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉：
var arr = [1, 2]
arr.push('a', 'b')
console.log(arr)
arr.pop();
console.log(arr);

// 空数组继续pop不会报错，而是返回undefined
var arr = [1]
var pop1 = arr.pop();
console.log(pop1);
arr.pop();
var pop2 = arr.pop();
console.log(pop2);
console.log(arr)

// unshift和shift
// 如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉：
var arr = [1, 2];
arr.unshift('a', 'b');
console.log(arr);
arr.shift();
console.log(arr);

// sort
// sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序：
var arr = ['B', 'C', 'A'];
console.log(arr.sort());

// reverse
// reverse()把整个Array的元素给掉个个，也就是反转：
var arr = ['one', 'two', 'three'];
arr.reverse();
console.log(arr);

// splice
// splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
console.log(arr);
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook');
console.log(arr);
// 只删除，不添加
arr.splice(2, 2);
console.log(arr);
// 只添加，不删除
arr.splice(2, 0, 'Google', 'Facebook');
console.log(arr);

// concat
// concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array：
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
console.log(added);
console.log(arr);

// 请注意，concat()方法并没有修改当前Array，而是返回了一个新的Array。
// 实际上，concat()方法可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array里
var arr = ['A', 'B', 'C'];
var arr1 = arr.concat(1, 2, [3, 4, 5]);
console.log(arr1);

// join
// join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：
var arr = ['A', 'B', 'C', 1, 2, 3];
var arr1 = arr.join('-');
console.log(arr1);
// 如果Array的元素不是字符串，将自动转换为字符串后再连接。

// 多维数组
// 如果数组的某个元素又是一个Array，则可以形成多维数组，例如：
var arr = [[1, 2, 3], [400, 500, 600], '-'];
console.log(arr);