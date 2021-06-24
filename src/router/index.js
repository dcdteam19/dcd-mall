import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/Login.vue'
import category from '../views/Category.vue'
import header from '../components/Header'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/header',
    name: 'header',
    component: header
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
