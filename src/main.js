import { preloadCriticalResources } from './utils/preload'\nimport { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Create app instance
const app = // Preload critical resources\npreloadCriticalResources()\n\ncreateApp(App)

// Use router
app.use(router)

// Mount app
app.mount('#app')

