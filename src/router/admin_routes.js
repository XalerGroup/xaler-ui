const ADMIN_META = {
  layout: 'admin',
  isAuthenticated: true,
  isSuperuser: true,
};

const AdminRoutes = [
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/BaseAdmin.vue'),
    meta: ADMIN_META,
    children: [
      // {
      //   path: 'users',
      //   name: 'user-admin',
      //   component: () => import(''),
      //   meta: ADMIN_META,
      // },
    ],
  },

];

export default AdminRoutes;
