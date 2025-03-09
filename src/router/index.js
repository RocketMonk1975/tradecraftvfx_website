import { createRouter, createWebHashHistory } from 'vue-router'

// Import page components
import HomePage from '../pages/HomePage.vue'
import WorkPage from '../pages/WorkPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'Home | TradeVFX' }
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkPage,
    meta: { title: 'Our Work | TradeVFX' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: { title: 'About Us | TradeVFX' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: { title: 'Contact Us | TradeVFX' }
  },
  // Catch all 404 - must be last
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

// Create router instance
const router = createRouter({
  history: createWebHashHistory('/tradecraftvfx_website/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on navigation
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  }
})

// Set page titles
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'TradeVFX'
  next()
})

export default router
