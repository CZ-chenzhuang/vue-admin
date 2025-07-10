import { refreshUserInfo, userLogin } from '@/api/user';
import { defineStore } from 'pinia';
import pinia from '..';
import { UserState } from './types';

export const userStore = defineStore('user', {
  state: (): UserState => ({
    username: 'Tom',
    accessToken: '',
    roles: ['common']
  }),
  actions: {
    storeUserLogin(data) {
      return userLogin(data)
        .then((res) => {
          console.log(res, ' saas');
          this.accessToken = res.accessToken;
          this.username = res.username;
          this.roles = res.roles;
          return res;
        })
        .catch(() => {});
    },
    storeRefreshUserInfo() {
      if (this.username === 'Tom' && this.accessToken !== '') {
        refreshUserInfo({
          accessToken: this.accessToken
        })
          .then((res) => {
            this.accessToken = res.accessToken;
            this.username = res.username;
            this.roles = res.roles;
          })
          .catch(() => {
            this.accessToken = '';
          });
      }
    }
  },
  persist: {
    key: 'userInfo',
    storage: sessionStorage,
    pick: ['accessToken']
  }
});
export function useUserStore() {
  return userStore(pinia);
}
