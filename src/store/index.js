import Vue from 'vue';
import Vuex from 'vuex';
import * as authModule from './auth.module';
import * as userModule from './user.module';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		auth: authModule,
		user: userModule
	}
});
