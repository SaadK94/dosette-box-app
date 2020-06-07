import { USER_REQUEST, USER_SUCCESS, USER_ADD, USER_EDIT, USER_DELETE } from './mutation-types';
import axios from '../axios-instance';
import qs from 'qs';

export const state = {
	user: ''
};
export const getters = {
	getUserData: (state) => {
		return state.user;
	}
};
export const actions = {
	[USER_REQUEST]: ({ commit, rootState }) => {
		return new Promise((resolve, reject) => {
			axios({
				url: '/dosette/get-by-user',
				params: {
					secret_token: rootState.auth.token
				},
				method: 'GET'
			}).then((res) => {
				const userData = res.data[0];
				commit(USER_SUCCESS, userData);
			});
			resolve();
		});
	},
	[USER_ADD]: ({ dispatch, rootState }, data) => {
		return new Promise((resolve, reject) => {
			axios({
				url: '/dosette/add-medicine',
				params: {
					secret_token: rootState.auth.token
				},
				data: qs.stringify(data),
				method: 'POST'
			}).then((res) => {
				dispatch(USER_REQUEST);
			});
			resolve();
		});
	},
	[USER_EDIT]: ({ dispatch, rootState }, data) => {
		return new Promise((resolve, reject) => {
			axios({
				url: '/dosette/edit-medicine',
				params: {
					secret_token: rootState.auth.token
				},
				data: qs.stringify(data),
				method: 'POST'
			}).then((res) => {
				dispatch(USER_REQUEST);
			});
			resolve();
		});
	},
	[USER_DELETE]: ({ dispatch, rootState }, data) => {
		return new Promise((resolve, reject) => {
			axios({
				url: '/dosette/remove-medicine',
				params: {
					secret_token: rootState.auth.token
				},
				data: qs.stringify(data),
				method: 'POST'
			}).then((res) => {
				dispatch(USER_REQUEST);
			});
			resolve();
		});
	}
};

export const mutations = {
	[USER_SUCCESS]: (state, userData) => {
		state.user = userData;
	}
};
