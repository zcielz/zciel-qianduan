import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/app.vue';
import Home from './components/home.vue';

//安装插件
Vue.use(VueRouter); //挂载属性

//创建路由对象并配置路由规则
let router = new VueRouter({
    //routes
    routes: [
        {path: '/home', component: Home}
    ]
});

//new Vue启动
new Vue({
    el: '#app',
    router: router, //可以简写router 让vue知道我们的路由规则
    render: c => c(App)
})