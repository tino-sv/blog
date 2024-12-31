<script>
</script>

<template>
  <header>
    <nav>
      <div className="logo">
      <a href = "https://github.com/tino-sv">
        <img src="../assets/github-mark-white.svg" alt="GitHub" class="github-logo"/>
      </a>
      </div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
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
