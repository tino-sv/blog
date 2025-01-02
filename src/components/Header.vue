<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { Sun, Moon } from 'lucide-vue-next';
import '@fontsource/orbitron';
import '@fontsource/share-tech-mono';

const isDarkMode = ref(true);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

watch(isDarkMode, (newValue) => {
  if (newValue) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
</script>

<template>
  <header class="bg-cyber-dark border-b border-cyber-blue">
    <nav class="max-w-7xl mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-8">
          <a href="https://github.com/tino-sv" 
             class="transform hover:scale-110 transition-transform duration-200">
            <img src="../assets/github-mark-white.svg" 
                 alt="GitHub" 
                 class="w-8 h-8" />
          </a>
          <RouterLink to="/" 
                      class="font-cyber text-cyber-blue hover:text-cyber-pink 
                             transition-colors duration-300">
            HOME
          </RouterLink>
          <RouterLink to="/blog" 
                      class="font-cyber text-cyber-blue hover:text-cyber-pink 
                             transition-colors duration-300">
            BLOG
          </RouterLink>
        </div>
        <button @click="toggleDarkMode" 
                class="p-2 rounded-lg bg-cyber-dark border border-cyber-blue 
                       hover:border-cyber-pink hover:shadow-neon-pink 
                       transition-all duration-300">
          <Sun v-if="isDarkMode" class="text-cyber-yellow w-5 h-5" />
          <Moon v-else class="text-cyber-blue w-5 h-5" />
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
   background-color: #1a1a1a;
   color: white;
   padding: 1rem;
}

nav {
   display: flex;
   justify-content: space-between;
}

nav a {
   color: white;
   text-decoration: none;
}

nav a:hover {
   text-decoration: underline;
}

.github-logo {
   width: 30px;
   height: auto;
}

button {
   background: none;
   border: none;
   color: white;
   cursor: pointer;
}
</style>
