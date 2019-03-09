var fs = require('fs')

// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
//    error
//
//    成功：
//      文件写入成功
//      error 是 null
//    失败：
//      文件写入失败
//      error 就是错误对象
fs.writeFile('../data/你好.txt', 'hhhhhhh', function (error) {
    if (error) {
        console.log('write error');
    } else {
        console.log('success');
    }
})