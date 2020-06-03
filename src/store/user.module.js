export const state = {
	user: {
		dosette: {
			morning: [
				{
					name: 'Aspirin',
					strength: '75mg',
					quantity: 1
				},
				{
					name: 'Ramipril',
					strength: '5mg',
					quantity: 1
				},
				{
					name: 'Bisoprolol',
					strength: '2.5mg',
					quantity: 1
				},
				{
					name: 'Metformin',
					strength: '500mg',
					quantity: 2
				}
			],
			midDay: [],
			teaTime: [
				{
					name: 'Metformin',
					strength: '500mg',
					quantity: 2
				}
			],
			bedtime: [
				{
					name: 'Simvistatin',
					strength: '20mg',
					quantity: 1
				}
			]
		}
	}
};
export const getters = {
	getMorning: (state) => {
		return state.user.dosette.morning;
	},
	getMidDay: (state) => {
		return state.user.dosette.midDay;
	},
	getTeaTime: (state) => {
		return state.user.dosette.teaTime;
	},
	getBedtime: (state) => {
		return state.user.dosette.bedtime;
	},
	getMedicines: (state) => {
		return state.user.dosette;
	}
};
export const actions = {};
export const mutations = {};
