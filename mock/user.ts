import { MockMethod } from 'vite-plugin-mock';
export default [
	{
		url: '/api/user/',
		method: 'get',
		response: ({ body }) => {
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
