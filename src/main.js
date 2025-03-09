import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

// Import base styles
;
import '@/assets/styles/layout-fix.css'
;
import '@/assets/styles/layout-fix.css'
;
import '@/assets/styles/layout-fix.css'
;
import '@/assets/styles/layout-fix.css'

// Import pages for router
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ServicesPage from './pages/ServicesPage.vue';
import WorkPage from './pages/WorkPage.vue';
import NewsPage from './pages/NewsPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

// Create router
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/services', component: ServicesPage },
    { path: '/work', component: WorkPage },
    { path: '/news', component: NewsPage },
    { path: '/:pathMatch(.*)*', component: NotFoundPage }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { top: 0 };
    }
  }
});

// Create store
const store = createStore({
  state() {
    return {
      menuOpen: false,
      darkMode: false,
      cookiesAccepted: false
    };
  },
  mutations: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode);
      if (state.darkMode) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    },
    acceptCookies(state) {
      state.cookiesAccepted = true;
      localStorage.setItem('cookiesAccepted', 'true');
    }
  },
  actions: {
    initApp({ commit }) {
      // Check dark mode preference
      const darkMode = localStorage.getItem('darkMode');
      if (darkMode === 'true') {
        commit('toggleDarkMode');
      }
      
      // Check cookie consent
      const cookiesAccepted = localStorage.getItem('cookiesAccepted');
      if (cookiesAccepted === 'true') {
        commit('acceptCookies');
      }
    }
  }
});

// Create and mount app
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

// Initialize app settings
store.dispatch('initApp');

