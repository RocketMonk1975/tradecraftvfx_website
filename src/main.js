import { preloadCriticalResources } from './utils/preload'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Preload critical resources
preloadCriticalResources()

createApp(App).use(router).mount('#app')
