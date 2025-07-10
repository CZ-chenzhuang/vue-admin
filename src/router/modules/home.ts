export default {
  path: '/',
  name: 'homePage',
  component: () => import('@/layout/index.vue'),
  meta: {},
  children: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '项目介绍',
        isShow: true
      }
    },
    {
      path: '/user',
      name: 'UserPage',
      component: () => import('@/views/user/index.vue'),
      meta: {
        title: '用户',
        isShow: true
      }
    },
    {
      path: '/role',
      name: 'RolePage',
      component: () => import('@/views/role/index.vue'),
      meta: {
        title: '角色',
        isShow: true
      }
    },
    {
      path: '/auth',
      name: 'AuthPage',
      component: () => import('@/views/auth/index.vue'),
      meta: {
        title: '权限',
        isShow: true
      }
    }
  ]
};
