//1.引入vue
import Vue from 'vue';

import App from './app.vue';

new Vue({
    el: '.app',
    render: c => c(App)
})