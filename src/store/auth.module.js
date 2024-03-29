import {
	AUTH_REQUEST,
	AUTH_SUCCESS,
	DOSETTE_REQUEST,
	AUTH_ERROR,
	AUTH_LOGOUT,
	AUTH_REGISTER,
	USER_LOGOUT
} from './mutation-types';
import axios from '../axios-instance';

const token = localStorage.getItem('user-token');
if (token) {
	axios.defaults.headers.common['Authorization'] = token;
}

export const state = {
	token: token || '',
	status: '',
	errorMessage: ''
};

export const getters = {
	isAuthenticated: (state) => !!state.token,
	authStatus: (state) => state.status,
	getToken: (state) => state.token,
	getErrorMessage: (state) => state.errorMessage
};

export const actions = {
	[AUTH_REQUEST]: async ({ commit, dispatch }, user) => {
		commit(AUTH_REQUEST);
		try {
			const resp = await axios({ url: '/login', params: user, method: 'POST' });
			const token = resp.data.token;
			localStorage.setItem('user-token', token);
			axios.defaults.headers.common['Authorization'] = token;
			commit(AUTH_SUCCESS, token);
			await dispatch(DOSETTE_REQUEST);
		} catch (err) {
			const error = err.response.data.message;
			commit(AUTH_ERROR, error);
			localStorage.removeItem('user-token');
		}
	},
	[AUTH_REGISTER]: async ({ commit }, user) => {
		commit(AUTH_REQUEST);
		try {
			await axios({ url: '/signup', params: user, method: 'POST' });
		} catch (err) {
			const error = err.response.data.message;
			commit(AUTH_ERROR, error);
		}
	},
	[AUTH_LOGOUT]: ({ commit }) => {
		commit(AUTH_LOGOUT);
		commit(USER_LOGOUT);
		localStorage.removeItem('user-token');
		delete axios.defaults.headers.common['Authorization'];
	}
};

export const mutations = {
	[AUTH_REQUEST]: (state) => {
		state.status = 'loading';
		state.errorMessage = '';
	},
	[AUTH_SUCCESS]: (state, token) => {
		state.status = 'success';
		state.token = token;
		state.errorMessage = '';
	},
	[AUTH_ERROR]: (state, err) => {
		state.status = 'error';
		state.errorMessage = err;
	},
	[AUTH_LOGOUT]: (state) => {
		state.status = '';
		state.token = '';
		state.errorMessage = '';
	}
};
