import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/styles/variables.css'
import './assets/styles/base.css'

// Import routes
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import WorkPage from './pages/WorkPage.vue'
import ProjectPage from './pages/ProjectPage.vue'
import NewsPage from './pages/NewsPage.vue'
import ContactPage from './pages/ContactPage.vue'

// Create router
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/services', component: ServicesPage },
  { path: '/work', component: WorkPage },
  { path: '/work/:id', component: ProjectPage },
  { path: '/news', component: NewsPage },
  { path: '/contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Create and mount the app
const app = createApp(App)
app.use(router)
app.mount('#app')
