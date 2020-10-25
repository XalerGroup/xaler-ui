const METADATA = {
  layout: 'base',
  guest: true,
};
const BaseRoute = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/base/HomeView.vue'),
    meta: METADATA,
  },
  {
    path: '/about',
    name: 'about-us',
    component: () => import('../views/base/AboutView.vue'),
    meta: METADATA,
  },
  {
    path: '/projects',
    name: 'our-projects',
    component: () => import('../views/base/ProjectsView.vue'),
    meta: METADATA,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/base/LoginView.vue'),
    meta: METADATA,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/base/RegisterView.vue'),
    meta: METADATA,
  },

];
export default BaseRoute;
