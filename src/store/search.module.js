import { MEDICINE_SEARCH, MEDICINE_UPDATE, MEDICINE_RESET } from './mutation-types';
import axios from '../axios-instance';

export const state = {
	medicineList: [ { name: 'Type to search...' } ]
};
export const getters = {
	getMedicineList: (state) => {
		return state.medicineList;
	}
};
export const actions = {
	[MEDICINE_SEARCH]: async ({ rootState, commit }, searchQuery) => {
		const medNames = [];
		const params = {
			url: '/medicine/search',
			params: {
				secret_token: rootState.auth.token,
				search: searchQuery
			},
			method: 'GET'
		};
		try {
			const res = await axios(params);
			const medicineList = res.data;
			medicineList.forEach((med, index) => {
				return medNames.push({
					name: med.name,
					value: index
				});
			});
			commit(MEDICINE_UPDATE, medNames);
		} catch (e) {
			console.log(e);
		}
	}
};
export const mutations = {
	[MEDICINE_UPDATE]: (state, medNames) => {
		state.medicineList = medNames;
	},
	[MEDICINE_RESET]: (state) => {
		state.medicineList = [ { name: 'Type to search...' } ];
	}
};
