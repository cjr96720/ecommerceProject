import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Login from '../views/Login'
import Signup from '../views/Signup'

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
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
