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
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import(/* webpackChunkName: "about" */ '../views/project')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
})
router.beforeEach(async (to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  // eslint-disable-next-line no-unused-vars
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  if (!nearestWithMeta) return next()

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })
    tag.setAttribute('data-vue-router-controlled', '')
    return tag
  })
  // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))
  next()
})

export default router
