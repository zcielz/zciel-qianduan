//加载模块
var http = require('http')
var fs = require('fs')

//创建web服务
var server = http.createServer()

var wwwDir = 'D:/Movie/www'

//服务功能
server.on('request', function (req, res) {
    var url = req.url

    var filePath = '/index.html'

    if (url != '/') {
        filePath = url;
    }

    fs.readFile(wwwDir + filePath, function (err, data) {
        if (err) {
            return res.end('404 Not Found.')
        }
        res.end(data);
    })
})

//绑定端口号
server.listen(3000, function () {
    console.log('running...');
})

