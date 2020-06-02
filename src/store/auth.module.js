import { AUTH_REQUEST, AUTH_SUCCESS, USER_REQUEST, AUTH_ERROR, AUTH_LOGOUT, AUTH_REGISTER } from './mutation-types';
import axios from '../axios-instance';

const token = localStorage.getItem('user-token');
if (token) {
	axios.defaults.headers.common['Authorization'] = token;
}

export const state = {
	token: token || '',
	status: ''
};

export const getters = {
	isAuthenticated: (state) => !!state.token,
	authStatus: (state) => state.status
};

export const actions = {
	[AUTH_REQUEST]: ({ commit, dispatch }, user) => {
		return new Promise((resolve, reject) => {
			// The Promise used for router redirect in login
			commit(AUTH_REQUEST);
			axios({ url: '/login', params: user, method: 'POST' })
				.then((resp) => {
					const token = resp.data.token;
					localStorage.setItem('user-token', token); // store the token in localstorage
					axios.defaults.headers.common['Authorization'] = token;
					commit(AUTH_SUCCESS, token);
					// you have your token, now log in your user :)
					// dispatch(USER_REQUEST);
					resolve(resp);
				})
				.catch((err) => {
					commit(AUTH_ERROR, err);
					localStorage.removeItem('user-token'); // if the request fails, remove any possible user token if possible
					reject(err);
				});
		});
	},
	[AUTH_REGISTER]: ({ commit }, user) => {
		return new Promise((resolve) => {
			axios({ url: '/signup', params: user, method: 'POST' });
			resolve();
		});
	},
	[AUTH_LOGOUT]: ({ commit, dispatch }) => {
		return new Promise((resolve) => {
			commit(AUTH_LOGOUT);
			localStorage.removeItem('user-token'); // clear your user's token from localstorage
			delete axios.defaults.headers.common['Authorization'];
			resolve();
		});
	}
};

// basic mutations, showing loading, success, error to reflect the api call status and the token when loaded
export const mutations = {
	[AUTH_REQUEST]: (state) => {
		state.status = 'loading';
	},
	[AUTH_SUCCESS]: (state, token) => {
		state.status = 'success';
		state.token = token;
	},
	[AUTH_ERROR]: (state) => {
		state.status = 'error';
	},
	[AUTH_LOGOUT]: (state) => {
		state.status = '';
		state.token = '';
	}
};
