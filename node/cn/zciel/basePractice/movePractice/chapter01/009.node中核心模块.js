//用来获取机器的信息
var os = require('os')

//用来操作路径的
var path = require('path')

//获取当前机器的cpu信息
console.log(os.cpus())

//memory内存
console.log(os.totalmem())

//获取一个路劲中扩展名部分
console.log(path.extname('c:/a/b/chello.txt'));