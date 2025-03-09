<template>
  
<div class="logo-container">
  <router-link to="/" class="logo-link">
    <img src="@/assets/images/logo.jpg" alt="TradeVFX Logo" class="logo">
  </router-link>
</div>
<div class="app-wrapper">
    <Loader v-if="isLoading" />
    <BackToTop />
    <CookieBanner v-if="!cookiesAccepted" @accept="acceptCookies" />
    
    <AppHeader />
    
    <main id="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <AppFooter />
  </div>
</template>

<script>
import PageTransition from './components/PageTransition.vue';
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import BackToTop from './components/BackToTop.vue';
import CookieBanner from './components/CookieBanner.vue';
import Loader from './components/Loader.vue';

export default {
  name: 'App',
  components: {
    PageTransition,
    PageTransition,
    AppHeader,
    AppFooter,
    BackToTop,
    CookieBanner,
    Loader
  },
  setup() {
    const store = useStore();
    const isLoading = ref(true);
    
    const cookiesAccepted = computed(() => store.state.cookiesAccepted);
    
    const acceptCookies = () => {
      store.commit('acceptCookies');
    };
    
    onMounted(() => {
      // Simulate initial loading
      setTimeout(() => {
        isLoading.value = false;
      }, 1000);
    });
    
    return {
      isLoading,
      cookiesAccepted,
      acceptCookies
    };
  }
}
</script>

<style>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
/* Direct font application - no variables */
body {
  font-family: 'Abel', sans-serif;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6, .section-title {
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  line-height: 1.2;
}
</style>



