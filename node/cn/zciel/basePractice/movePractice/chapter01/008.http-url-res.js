var http = require('http')

//1.创建一个server
var server = http.createServer();

//2.监听request请求时间，设置请求处理函数
server.on('request', function (req, res) {
    console.log('收到请求了，请求路劲是:' + req.url);
    console.log('请求我们的客户端地址是:', req.socket.remoteAddr, req.socket.remotePort);
    /*
        res.write('hello');
        res.write('world');
        res.end();*/

    // 上面的方式比较麻烦，推荐使用更简单的方式，直接 end 的同时发送响应数据
    // res.end('hello nodejs')

    // 根据不同的请求路径发送不同的响应结果
    // 1. 获取请求路径
    //    req.url 获取到的是端口号之后的那一部分路径
    //    也就是说所有的 url 都是以 / 开头的
    // 2. 判断路径处理响应

    var url = req.url
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (url == '/') {
        res.end('index page');
    } else if (url == '/login') {
        res.end('login page')
    } else if (url == '/products') {
        var products = [{
            name: '苹果x',
            price: 8888
        }, {
            name: 'bolox',
            price: 5000
        }, {
            name: '小的',
            price: 199
        }]

        //res.end(products);
        res.end(JSON.stringify(products));
    } else {
        res.end('404 NOT FOUND');
    }
})

server.listen(3000, function () {
    console.log('...3000');
})