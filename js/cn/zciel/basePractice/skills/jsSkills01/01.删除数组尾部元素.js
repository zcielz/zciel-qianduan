//一个简单的用来清空或则删除数组尾部元素的简单方法就是改变数组的length属性值。

const arr = [11, 22, 33, 44, 55, 66]

//truncanting
arr.length = 3;
console.log(arr);   //[ 11, 22, 33 ]

//clearing
arr.length = 0;
console.log(arr);  //[]
console.log(arr[2]);  //undefined