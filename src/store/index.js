import Vue from 'vue';
import Vuex from 'vuex';
import * as authModule from './auth.module';
import * as dosetteModule from './dosette.module';
import * as searchModule from './search.module';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		auth: authModule,
		dosette: dosetteModule,
		search: searchModule
	}
});
