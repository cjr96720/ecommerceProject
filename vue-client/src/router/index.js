import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Shop from '../views/Shop'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
