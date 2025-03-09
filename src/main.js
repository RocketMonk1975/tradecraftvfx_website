import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/styles/variables.css'
import './assets/styles/base.css'

// Import routesimport HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import WorkPage from './pages/WorkPage.vue'
import NewsPage from './pages/NewsPage.vue'

// Create router
const routes = [  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/services', component: ServicesPage },
  { path: '/work', component: WorkPage },
  { path: '/news', component: NewsPage },
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
