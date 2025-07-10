export default {
  path: '/',
  name: 'homePage',
  component: () => import('@/layout/index.vue'),
  meta: {},
  children: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {}
    }
  ]
};
