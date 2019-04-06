'use strict';
console.log(['Google', 'Apple', 'Microsoft'].sort())

console.log(['Google', 'apple', 'Microsoft'].sort())

console.log([10, 20, 1, 2].sort())

// 第二个排序把apple排在了最后，是因为字符串根据ASCII码进行排序，而小写字母a的ASCII码在大写字母之后。
// 这是因为Array的sort()方法默认把所有元素先转换为String再排序，结果'10'排在了'2'的前面，因为字符'1'比字符'2'的ASCII码小。

var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});

console.log(arr); //[1, 2, 10, 20]

// 默认情况下，对字符串排序，是按照ASCII的大小比较的，现在，我们提出排序应该忽略大小写，按照字母序排序。要实现这个算法，不必对现有代码大加改动，只要我们能定义出忽略大小写的比较算法就可以：
var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    var x1 = s1.toUpperCase();
    var x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
})
console.log(arr);
// 忽略大小写来比较两个字符串，实际上就是先把字符串都变成大写（或者都变成小写），再比较。

// sort()方法会直接对Array进行修改，它返回的结果仍是当前Array
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();

console.log(a1);
console.log(a2);
console.log(a1 === a2);