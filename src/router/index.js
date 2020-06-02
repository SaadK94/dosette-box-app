import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Dashboard from '../components/Dashboard.vue';
import Logout from '../components/Logout.vue';

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
		name: 'Home',
		component: Home
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		beforeEnter: ifNotAuthenticated
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		beforeEnter: ifNotAuthenticated
	},
	{
		path: '/logout',
		name: 'Logout',
		component: Logout,
		beforeEnter: ifAuthenticated
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
		beforeEnter: ifAuthenticated
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
