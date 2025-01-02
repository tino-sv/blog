import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Blog from './components/Blog/Blog.vue';
import GoBlog from './components/Blog/GoBlog.vue';
import Home from './components/Home.vue';
import './style.css'; // Import Tailwind CSS

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/blog/go', component: GoBlog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
