import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counterNumber: 0,
  },
  getters: {
  },
  mutations: {
    CHANGE_NUMBER(state, payload) {
      state.counterNumber += payload;
    }
  },
  actions: {
    changeNumber({ commit }, payload) {
      commit('CHANGE_NUMBER', payload);
    }
  },
  modules: {
  }
})
