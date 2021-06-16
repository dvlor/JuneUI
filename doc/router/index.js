import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/doc',
    component: () => import('../views/doc.vue'),
    children: [{
      path: 'button',
      component: () => import('../views/components/button.vue'),
    }, {
      path: 'menu',
      component: () => import('../views/components/menu.vue'),
    }],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
