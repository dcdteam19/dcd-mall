import { createRouter, createWebHistory } from 'vue-router'
import shop from '../views/Shop.vue'
import login from '../views/Login.vue'
import category from '../views/Category.vue'
import good from '../views/Good.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
