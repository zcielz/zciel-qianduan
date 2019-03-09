// ip 地址用来定位计算机
// 端口号用来定位具体的应用程序
// 所有需要联网通信的应用程序都会占用一个端口号

//1.加载http模块
var http = require('http')

//2.使用http.createServer()方法创建一个web服务
//返回一个server实例
var server = http.createServer()

//3.服务器功能
server.on('request', function (req, res) {
    console.log('收到请求了，请求路劲是:' + req.url);
    console.log('请求我们的客户端是:', req.socket.remoteAddress, req.socket.remoteMRTCPPort);
    console.log('看下这个直接端口号区别:', req.socket.remotePort);

    res.end('hello nodejs');
})

//4.绑定端口号，启动服务器
server.listen(3000, function () {
    console.log('服务器启动成功，可以访问..');
})