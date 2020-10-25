import Vue from 'vue';
import VueRouter from 'vue-router';
import BaseRoute from '@/router/base_routes';

Vue.use(VueRouter);

const routes = [
  ...BaseRoute,
  {
    path: '*',
    name: 'page-not-found',
    component: () => import('../views/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
