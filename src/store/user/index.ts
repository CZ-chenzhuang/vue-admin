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
					this.accessToken = res.accessToken;
					this.username = res.username;
					this.roles = res.roles;
					return data;
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
		storage: sessionStorage
		// paths: ['accessToken']
	}
});
export function useUserStore() {
	return userStore(pinia);
}
