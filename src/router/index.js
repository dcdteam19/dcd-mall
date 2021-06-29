import { createRouter, createWebHistory } from 'vue-router'
import shop from '../views/Shop.vue'
import login from '../views/Login.vue'
import category from '../views/Category.vue'
import good from '../views/Good.vue'
import user from '../views/User.vue'
import userorder from '../views/UserOrder.vue'

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
    name:'user/order',
    component:userorder
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
