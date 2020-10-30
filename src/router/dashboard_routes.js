const METADATA = {
  layout: 'cabinet',
  isAuthenticated: true,
};
const DashboardRoute = [
  {
    path: '/dashboard',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../views/dashboard/DashboardView.vue'),
        meta: METADATA,
      },
    ],

  },
];
export default DashboardRoute;
