// ES2015中，有了集合的语法。通过使用集合语法和Spread操作，可以很容易将重复的元素移除：

const removeDuplicateItems = arr => [... new Set(arr)];
removeDuplicateItems([42, 'foo', 42, 'foo', true, true]);