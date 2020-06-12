import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home from '../components/Home.vue';

import { DOSETTE_REQUEST } from '../store/mutation-types';

const ifNotAuthenticated = (to, from, next) => {
	if (!store.getters.isAuthenticated) {
		next();
		return;
	}
	next('/');
};

const ifAuthenticated = async (to, from, next) => {
	if (store.getters.isAuthenticated) {
		await store.dispatch(DOSETTE_REQUEST);
		next();
		return;
	}
	next('/login');
};

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Home,
		beforeEnter: ifAuthenticated
	},
	{
		path: '/register',
		component: Register,
		beforeEnter: ifNotAuthenticated
	},
	{
		path: '/login',
		component: Login,
		beforeEnter: ifNotAuthenticated
	},
	{
		path: '*',
		redirect: '/'
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
