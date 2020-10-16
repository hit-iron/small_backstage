import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


// import Login from '../components/Login.vue';
// import Home from '../views/home/Home.vue';
// import Welcome from '../views/home/Welcome.vue';
// import User from '../views/home/User.vue';
// import Roles from '../views/power/Roles.vue';
// import Rights from '../views/power/Rights.vue';
// import Cate from '../views/goods/Cate.vue'
// import Params from '../views/goods/Params.vue'
// import GoodsList from '../views/goods/GoodsList.vue'
// import Add from '../views/goods/Add.vue'
// import Report from '../views/report/Report.vue'
// import Order from '../views/order/Order.vue'

const Login = () => import(/* webpackChunkName:"login_home_welcome" */ '../components/Login.vue')
// import Login from './components/Login.vue'
const Home = () => import(/* webpackChunkName:"login_home_welcome" */ '../views/home/Home.vue')
// import Home from './components/Home.vue'
const Welcome = () => import(/* webpackChunkName:"login_home_welcome" */ '../views/home/Welcome.vue')
// import Welcome from './components/Welcome.vue'
const Users = () => import(/* webpackChunkName:"user" */ '../views/home/User.vue')
// import Users from './components/user/Users.vue'
const Rights = () => import(/* webpackChunkName:"power" */ '../views/power/Rights.vue')
// import Rights from './components/power/Rights.vue'
const Roles = () => import(/* webpackChunkName:"power" */ '../views/power/Roles.vue')
// import Roles from './components/power/Roles.vue'
const Cate = () => import(/* webpackChunkName:"goods" */ '../views/goods/Cate.vue')
// import Cate from './components/goods/Cate.vue'
const Params = () => import(/* webpackChunkName:"goods" */ '../views/goods/Params.vue')
// import Params from './components/goods/Params.vue'
const GoodsList = () => import(/* webpackChunkName:"goods" */ '../views/goods/GoodsList.vue')
// import GoodList from './components/goods/List.vue'
const GoodAdd = () => import(/* webpackChunkName:"goods" */ '../views/goods/Add.vue')
// import GoodAdd from './components/goods/Add.vue'
const Order = () => import(/* webpackChunkName:"order" */ '../views/order/Order.vue')
// import Order from './components/order/Order.vue'
const Report = () => import(/* webpackChunkName:"report" */ '../views/report/Report.vue')
// import Report from './components/report/Report.vue'
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
      { path: '/users', component: Users },
      { path: '/roles', component: Roles },
      { path: '/rights', component: Rights },
      { path: '/categories', component: Cate },
      { path: '/params', component: Params },
      { path: '/goods', component: GoodsList },
      { path: '/goods/add', component: GoodAdd },
      { path: '/reports', component: Report },
      { path: '/orders', component: Order }


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
