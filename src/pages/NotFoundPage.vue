<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <router-link to="/">Go to Homepage</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style scoped>
.not-found-page {
  text-align: center;
  padding: 50px;
}

.not-found-content {
  display: inline-block;
  text-align: left;
}

h1 {
  font-size: 100px;
  margin: 0;
}

h2 {
  font-size: 24px;
  margin: 0;
}

p {
  margin: 20px 0;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>