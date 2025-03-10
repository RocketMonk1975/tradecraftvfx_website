import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import WorkPage from './pages/WorkPage.vue'
import ContactPage from './pages/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: { template: '<div><h1>Privacy Policy</h1><p>This is our privacy policy page.</p></div>' }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: { template: '<div><h1>Terms of Service</h1><p>This is our terms of service page.</p></div>' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
