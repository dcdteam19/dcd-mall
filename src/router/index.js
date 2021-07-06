import { createRouter, createWebHistory } from 'vue-router'
import {Toast} from 'vant'
import shop from '../views/Shop.vue'
import login from '../views/Login.vue'
import category from '../views/Category.vue'
import good from '../views/Good.vue'
import user from '../views/User.vue'
import userorder from '../views/UserOrder.vue'
import userorderinfo from '../views/Order.vue'
import useraddress from '../views/UserAddress.vue'
import useraddressedit from '../views/UserAddressEdit'
import store from '../store'


const routes = [
  {
    path: '/',
    name: 'shop',
    meta:{
      keepAlive:true,
      isAuthRequired:false //需不需要登录授权
    },
    component: shop
  },
  {
    path: '/login',
    name: 'login',
    meta:{
      keepAlive:false
    },
    component: login
  },
  {
    path: '/category',
    name: 'category',
    meta:{
      keepAlive:true
    },
    component: category
  },
  {
    path: '/good',
    name: 'good',
    meta:{
      keepAlive:true
    },
    component: good
  },
  {
    path:'/user',
    name:'user',
    meta:{
      keepAlive:true,
      // isAuthRequired:true      
    },
    component:user
  },
  {
    path:'/user/order',
    name:'userorder',
    meta:{
      keepAlive:true,
      // isAuthRequired:true  
    },
    component:userorder
  },
  {
    path:'/user/order/info',
    name:'userorderinfo',
    meta:{
      keepAlive:true,
      // isAuthRequired:true  
    },
    component:userorderinfo
  },
  {
    path:'/user/address',
    name:'useraddress',
    meta:{
      keepAlive:true,
      // isAuthRequired:true  
    },
    component:useraddress
  },
  {
    path:'/user/address/edit',
    name:'useraddressedit',
    meta:{
      keepAlive:false,
      // isAuthRequired:true 
    },
    component:useraddressedit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  //如果页面需要登陆，而用户没有登录，则跳到登陆页面
  if(to.meta.isAuthRequired && store.state.user.isLogin===false){
    Toast.fail('请先登录')
    return next('/login')
  }
  next();
})

export default router
