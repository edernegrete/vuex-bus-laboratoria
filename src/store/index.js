import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clicks: 0,
  },
  mutations: {
    SET_VALUE(state) {
      /* eslint-disable */
      state.clicks += 1;
    },
  },
  actions: {
    setValue({ commit }) {
      commit('SET_VALUE');
    },
  },
  getters: {
    getClicks: state => state.clicks,
  },

});
