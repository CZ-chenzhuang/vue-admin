import { get, post } from '@/http/request';

export type LoginRequest = {
  username: string;
  password: string;
}

// 刷新登录信息需要的参数
export type RLoginRequest = {
  accessToken: string;
}
export type LoginResponse = {
  accessToken: string;
  username: string;
  roles: string[];
}
// 定义的接口
export const userLogin = async (data?: LoginRequest) => {
  return post<LoginResponse, LoginRequest>({}, '/login', data);
}

export const refreshUserInfo = async (data?: RLoginRequest) => {
  return post<LoginResponse, RLoginRequest>({}, '/getUserInfo', data);
}