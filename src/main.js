import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './assets/styles/variables.css'
import './assets/styles/base.css'

// Import routes - only include pages we know exist
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'

// Create router with hash mode (more reliable for GitHub Pages)
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Create and mount the app
createApp(App)
  .use(router)
  .mount('#app')
