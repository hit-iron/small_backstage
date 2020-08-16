import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


import Login from '../components/Login.vue';
import Home from '../views/home/Home.vue';
import Welcome from '../views/home/Welcome.vue';
import User from '../views/home/User.vue';
import Roles from '../views/power/Roles.vue';
import Cate from '../views/goods/Cate.vue'
import Params from '../views/goods/Params.vue'
import GoodsList from '../views/goods/GoodsList.vue'


const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: User },
      { path: '/roles', component: Roles },
      { path: '/categories', component: Cate },
      { path: '/params', component: Params },
      { path: '/goods', component: GoodsList },


    ]
  }
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
