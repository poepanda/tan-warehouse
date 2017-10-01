/* eslint-disable no-param-reassign */
import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';

// Named export is used for unit-testing purpose
export const mutations = {
  selectHanded(state, selected) {
    state.handed = selected;
  },
};

// The named export is used for unit-testing purpose
export const actions = {

};

const getters = {

};

// Integrate Vuex into Vue
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    handed: '', // 'left' or 'right', Default: ''
  },
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()],
});
