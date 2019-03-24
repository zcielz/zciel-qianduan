// 使用Spread操作，可以很容易去平铺嵌套多维数组：
const arr = [11, [22, 33], [44, 55], 66];
const flatArr = [].concat(...arr);
console.log(arr)
console.log(flatArr)

// 通过递归，我们可以平铺任意维度的嵌套数组。
function flattenArray(arr) {
    const flattened = [].concat(...arr);
    return flattened.some(item => Array.isArray(item)) ?
        flattenArray(flattened) : flattened;
}

const arr1 = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
const flatArr1 = flattenArray(arr1);
console.log(flatArr1)