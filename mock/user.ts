import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/mock/api/login',
    method: 'post',
    response: ({ body }) => {
      console.log(body, 'sa');
      if (body.username === 'admin') {
        return {
          code: 0,
          message: '登录成功',
          data: {
            username: 'admin',
            accessToken: 'admin_token',
            roles: ['admin']
          }
        };
      } else {
        return {
          code: 1,
          message: '登录失败',
          data: null
        };
      }
    }
  }
] as MockMethod[];
