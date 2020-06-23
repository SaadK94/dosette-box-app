import {
	DOSETTE_REQUEST,
	DOSETTE_SUCCESS,
	DOSETTE_ADD,
	DOSETTE_EDIT,
	DOSETTE_DELETE,
	USER_LOGOUT,
	MEDICINE_RESET
} from './mutation-types';
import axios from '../axios-instance';
import qs from 'qs';

export const state = {
	dosette: ''
};
export const getters = {
	getDosette: (state) => {
		return state.dosette;
	}
};
export const actions = {
	[DOSETTE_REQUEST]: async ({ commit, rootState }) => {
		const params = {
			url: '/dosette/get-by-user',
			params: {
				secret_token: rootState.auth.token
			},
			method: 'GET'
		};
		try {
			const res = await axios(params);
			const dosetteData = res.data[0];
			commit(DOSETTE_SUCCESS, dosetteData);
		} catch (e) {
			console.log(e);
		}
	},
	[DOSETTE_ADD]: async ({ commit, dispatch, rootState }, data) => {
		const params = {
			url: '/dosette/add-medicine',
			params: {
				secret_token: rootState.auth.token
			},
			data: qs.stringify(data),
			method: 'POST'
		};
		try {
			await axios(params);
			await dispatch(DOSETTE_REQUEST);
			commit(MEDICINE_RESET);
		} catch (e) {
			console.log(e);
		}
	},
	[DOSETTE_EDIT]: async ({ dispatch, rootState }, data) => {
		const params = {
			url: '/dosette/edit-medicine',
			params: {
				secret_token: rootState.auth.token
			},
			data: qs.stringify(data),
			method: 'POST'
		};
		try {
			await axios(params);
			await dispatch(DOSETTE_REQUEST);
		} catch (e) {
			console.log(e);
		}
	},
	[DOSETTE_DELETE]: async ({ dispatch, rootState }, data) => {
		const params = {
			url: '/dosette/remove-medicine',
			params: {
				secret_token: rootState.auth.token
			},
			data: qs.stringify(data),
			method: 'POST'
		};
		try {
			await axios(params);
			await dispatch(DOSETTE_REQUEST);
		} catch (e) {
			console.log(e);
		}
	}
};
export const mutations = {
	[DOSETTE_SUCCESS]: (state, dosetteData) => {
		state.dosette = dosetteData;
	},
	[USER_LOGOUT]: (state) => {
		state.dosette = '';
	}
};
