var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
var router = require('./router')

var app = express()

app.use('/publid/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

// 在 Node 中，有很多第三方模板引擎都可以使用，不是只有 art-template
// ejs、jade（pug）、handlebars、nunjucks
//    <%%>
//    {{}}
//    h1
//    div
//      h1

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) //默认就是 ./views目录

//配置解析表单POST请求体插件（注意：一定要在 app.use(router)之前）
//parse application/x-www-form-urlencoded
app.use(bodyParse.urlencoded({extended: false}))
//parse application/json
app.use(bodyParser.json())

// 在 Express 这个框架中，默认不支持 Session 和 Cookie
// 但是我们可以使用第三方中间件：express-session 来解决
// 1. npm install express-session
// 2. 配置 (一定要在 app.use(router) 之前)
// 3. 使用
//    当把这个插件配置好之后，我们就可以通过 req.session 来发访问和设置 Session 成员了
//    添加 Session 数据：req.session.foo = 'bar'
//    访问 Session 数据：req.session.foo

app.use(session({
    // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
    // 目的是为了增加安全性，防止客户端恶意伪造
    secret: 'zz',
    resave: false,
    saveUninitialized: false //无论是是否使用session ，我都默认直接给你分配一把秘钥
}))

//把路由挂载到app中
app.use(router)

//配置一个处理404的中间件
app.user(function (req, res) {
    res.render('404.html')
})

//配置一个全局错误处理中间件
app.use(function (err, req, res, next) {
    res.status(500).json({
        err_code: 500,
        message: err.message
    })
})

app.listen(5000, function () {
    console.log('running...');
})
