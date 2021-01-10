import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skill',
    name: 'Skill',
    component: () => import(/* webpackChunkName: "about" */ '../views/skill')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import(/* webpackChunkName: "about" */ '../views/project')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
