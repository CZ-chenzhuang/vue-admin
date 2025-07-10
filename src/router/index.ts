import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'home',
//     component: () => import('../views/home/index.vue'),
//     meta: {},
//     children: []
//   },
// ]

/**
 * import.meta.glob是vite提供的特殊导入方式
 * 可以将模块中全部内容导入为一个Record对象
 * 默认是懒加载模式，加入eager取消懒加载
 */
const modules: Record<string, any> = import.meta.glob(['./modules/*.ts'], {
  eager: true
});
// 配置路由
const routes: RouteRecordRaw[] = [];
Object.values(modules).forEach((item) => {
  routes.push(item.default);
});
console.log(routes, '配置路由的routes');
const router = createRouter({
  history: createWebHistory(),
  routes
});

// 不需要权限的路由
const whiteList = ['/login', '/about'];
router.beforeEach((_to, _from, next) => {
  NProgress.start();
  const isLogin = window.sessionStorage.getItem('userInfo');
  if (isLogin || whiteList.includes(_to.path)) {
    return next();
  } else {
    return next('/login');
  }
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
