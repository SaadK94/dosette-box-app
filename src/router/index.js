import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home from '../components/Home.vue';

const ifNotAuthenticated = (to, from, next) => {
	if (!store.getters.isAuthenticated) {
		next();
		return;
	}
	next('/');
};

const ifAuthenticated = (to, from, next) => {
	if (store.getters.isAuthenticated) {
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
