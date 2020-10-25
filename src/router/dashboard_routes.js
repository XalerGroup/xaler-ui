const METADATA = {
  layout: 'dashboard',
  isAuthenticated: true,
};
const DashboardRoute = [
  {
    path: '/dashboard',
    children: [
      {
        path: '',
        name: 'dashboard',
        meta: METADATA,
      },
    ],

  },
];
export default DashboardRoute;
