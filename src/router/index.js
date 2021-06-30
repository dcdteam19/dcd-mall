import { createRouter, createWebHistory } from 'vue-router'
import shop from '../views/Shop.vue'
import login from '../views/Login.vue'
import category from '../views/Category.vue'
import good from '../views/Good.vue'
import user from '../views/User.vue'
import userorder from '../views/UserOrder.vue'
import userorderinfo from '../views/Order.vue'
import useraddress from '../views/UserAddress.vue'
import useraddressedit from '../views/UserAddressEdit'

const routes = [
  {
    path: '/',
    name: 'shop',
    component: shop
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/good',
    name: 'good',
    component: good
  },
  {
    path:'/user',
    name:'user',
    component:user
  },
  {
    path:'/user/order',
    name:'userorder',
    component:userorder
  },
  {
    path:'/user/order/info',
    name:'userorderinfo',
    component:userorderinfo
  },
  {
    path:'/user/address',
    name:'useraddress',
    component:useraddress
  },
  {
    path:'/user/address/edit',
    name:'useraddressedit',
    component:useraddressedit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
