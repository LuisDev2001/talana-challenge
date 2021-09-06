import { createStore } from "vuex";

export default createStore({
  state: {
    view: "",
  },
  mutations: {
    setView(state, viewParam) {
      state.view = viewParam;
    },
  },
  actions: {
    setView: ({ commit }) => commit("setView"),
  },
  modules: {},
  getters: {
    getView(state) {
      return state.view;
    },
  },
});
