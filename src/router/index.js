import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from '../views/Start.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Start,
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
