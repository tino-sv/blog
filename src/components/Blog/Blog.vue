<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="home p-4">
    <h3 class="text-cyber-blue hover:text-cyber-pink transition-colors duration-300">
      <RouterLink to="/blog/go">My Journey Learning Go: The First Steps into Programming</RouterLink>
    </h3>
  </div>
</template>

<style scoped>
  .home {
    padding: 1rem;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.1em;
    line-height: 1.5;
  }

  ul {
    list-style-type: disc;
    margin-left: 2em;
  }

  li {
    font-size: 1.1em;
    line-height: 1.5;
  }
</style>
