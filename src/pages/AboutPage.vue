<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <h1>About Us</h1>
      </div>
    </section>
    
    <section class="page-content">
      <div class="container">
        <p>This is the about page content. This will be filled with actual content later.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.page-header {
  padding: calc(var(--header-height) + var(--spacing-2xl)) 0 var(--spacing-xl);
  background-color: var(--background-alt);
}

.page-content {
  padding: var(--spacing-2xl) 0;
}
</style>