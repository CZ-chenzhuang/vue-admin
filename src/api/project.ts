import { get } from '@/http/request';

export type LoginRequest = {
  username: string;
  password: string;
};

// 刷新登录信息需要的参数
export type RLoginRequest = {
  accessToken: string;
};
export interface IProjectListItem {
  id: string;
  name: string;
  description: string;
}
// 定义的接口
export const getProjectList = async (data?) => {
  return get<Array<IProjectListItem>, any>({}, '/project-list', data);
};
