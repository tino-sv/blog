<script>
import { RouterLink } from 'vue-router';
</script>

<template>
   <header>
      <nav>
         <div class="logo">
            <a href="https://github.com/tino-sv">
               <img
                  src="../assets/github-mark-white.svg"
                  alt="GitHub"
                  class="github-logo"
               />
            </a>
         </div>
         <RouterLink to="/">Home</RouterLink>
         <RouterLink to="/blog">Blog</RouterLink>
      </nav>
   </header>
</template>

<style>
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
</style>
