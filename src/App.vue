<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <PageTransition>
        <router-view />
      </PageTransition>
    </main>
    <AppFooter />
    
    <CustomCursor />
  </div>
</template>

<script>
import PageTransition from './components/PageTransition.vue';

import CustomCursor from './components/CustomCursor.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    PageTransition,
    BackToTop,
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>

