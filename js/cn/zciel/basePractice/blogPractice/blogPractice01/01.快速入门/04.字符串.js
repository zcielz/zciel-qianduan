// 要获取字符串某个指定位置的字符，使用类似Array的下标操作，索引号从0开始：
// 需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果：
var s = 'Test';
s[0] = 'X';
console.log(s)

// toUpperCase
// toUpperCase()把一个字符串全部变为大写：
//
// toLowerCase
// toLowerCase()把一个字符串全部变为小写：
//
// indexOf
// indexOf()会搜索指定字符串出现的位置：
//
// substring
// substring()返回指定索引区间的子串：

var s = 'hello world';
console.log(s.indexOf('world'))
var s1 = s.substring(s.indexOf('world'));
console.log(s1);