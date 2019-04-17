import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import {setTitle} from '@/lib/util'

Vue.use(Router)

/*export default new Router({
  // mode: 'history',  //默认hash模式
  routes //传出去的一个路由列表
})*/

const router = new Router({
  routes
})

const HAS_LOGINED = true

//#全局守卫
//前置守卫
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({name: 'login'}) //如果没有登录就回到登录页面
  } else {
    if (HAS_LOGINED) next({name: 'home'})
    else next()
  }
})

//导航被确认之前，所有组件内守卫
// router.beforeResolve

//后置钩子
router.afterEach((to, from) => {
  //logining = false

})

/**
 * 完整的导航体系
 * 1.导航被触发
 * 2.在失活的组件（即将离开的页面组件）里调用离开守卫beforeRouterLeave
 * 3.调用全局的前置守卫 beforeEach
 * 4.在重用的组件里调用 beforeRouteUpdate
 * 5.调用路由独享守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件（即将进入页面组件）里调用beforeRouteEnter
 * 8.调用全局解析守卫beforeResolve
 * 9.导航被确认
 * 10.调用全局的后置守卫 afterEach
 * 11.触发DOM更新
 * 12.用创建好的实例调用beforeRouterEnter守卫传给Next的回调函数
 */

export default router
