//1.引入vue
import Vue from 'vue';

//2.引入app.vue
import App from './app.vue';

Vue.filter('myFilter', function (value) {
    return '我全局过滤器';
});

//new Vue
new Vue({
    el: '#app',
    render: c => c(App)
})