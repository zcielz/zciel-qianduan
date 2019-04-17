import Home from '@/views/Home.vue'
//路由 优先级 从上到下
export default [
  {
    path: '/',
    alias: '/home_page', //别名 用这个也可以访问
    name: 'home',
    component: Home,
    props: route => ({  //路由组件传参 3.函数模式
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {  //路由独享守卫
      /* if (from.name === "about") alert('这是从about页面来的')
       else alert('这不是从about页来的')*/
      next()
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {  //路由组件传参 1.对象模式
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue')
  },
  {
    path: '/argu1/:name',
    name: 'argu1',
    component: () => import('@/views/argu1.vue'),
    props: true  //路由组件传参 2.boolean模式
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import ('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {//<!-- 注意这里有s -->
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: '/' //重定向
  },
  {
    path: '/mains',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/to',
    redirect: to => {
      console.log(to)
      /* return {
         name: 'home'
       }*/
      return '/'
    }
  },
  {
    path: '/to1',
    redirect: to => '/'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store')
  },
  {
    path: '/store1',
    name: 'store1',
    component: () => import('@/views/store1')
  },
  {
    path: '/email1',
    name: 'email1',
    component: () => import('@/views/emial1')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
