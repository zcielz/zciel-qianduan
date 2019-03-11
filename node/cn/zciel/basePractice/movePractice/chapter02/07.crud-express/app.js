/**
 * app.vue 入门模块
 * 职责：
 *   创建服务
 *   做一些服务相关配置
 *     模板引擎
 *     body-parser 解析表单 post 请求体
 *     提供静态资源服务
 *   挂载路由
 *   监听端口启动服务
 */

var express = require('express');
var router = require('./router');
var bodyParser = require('body-paresr');

var app = express();

app.use('/node_modules/', express.static('F:\\project\\source\\mystudy\\myproject\\zciel\\source\\zciel-qianduan\\node\\node_modules'));
app.use('/public', express.static('./public/'))

app.engine('html', require('express-art-template'))

//配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
//parse application/json
app.use(bodyParser.json())

//把路由器挂载到app服务器中
app.use(router)

app.listen(3000, function () {
    console.log('running 300..');
})

module.exports = app

