import Vue from 'vue';
import VueRouter from 'vue-router';
import BaseRoute from '@/router/base_routes';
import DashboardRoute from '@/router/dashboard_routes';
import AdminRoutes from '@/router/admin_routes';

Vue.use(VueRouter);

const routes = [
  ...BaseRoute,
  ...DashboardRoute,
  ...AdminRoutes,
  {
    path: '*',
    name: 'page-not-found',
    component: () => import('../views/PageNotFound.vue'),
    meta: {
      layout: 'base',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
