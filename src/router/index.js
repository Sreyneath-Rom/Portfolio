// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/Homepage.vue'
import PortfolioPage from '@/pages/PortfolioPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Homepage },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioPage },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router