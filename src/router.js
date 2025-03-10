import { createRouter, createWebHistory } from 'vue-router';

// Import pages
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import WorkPage from './pages/WorkPage.vue';
import ContactPage from './pages/ContactPage.vue';
import ServicesPage from './pages/ServicesPage.vue';
import PrivacyPage from './pages/PrivacyPage.vue';
import TermsPage from './pages/TermsPage.vue';
import ProjectDetailPage from './pages/ProjectDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'TradeCraft VFX - Professional VFX Studio' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: { title: 'About Us | TradeCraft VFX' }
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkPage,
    meta: { title: 'Our Work | TradeCraft VFX' }
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage,
    meta: { title: 'Services | TradeCraft VFX' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: { title: 'Contact Us | TradeCraft VFX' }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyPage,
    meta: { title: 'Privacy Policy | TradeCraft VFX' }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsPage,
    meta: { title: 'Terms of Service | TradeCraft VFX' }
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetailPage,
    props: true,
    meta: { title: 'Project Details | TradeCraft VFX' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
    meta: { title: 'Page Not Found | TradeCraft VFX' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  }
});

// Update page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'TradeCraft VFX';
  next();
});

export default router;
