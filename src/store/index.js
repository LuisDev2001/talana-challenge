import { createStore } from "vuex";

export default createStore({
  state: {
    view: "",
    viewCode: 0,
    modalAddedProduct: false,
    informationProduct: {},
  },
  mutations: {
    setView(state, viewParam) {
      state.view = viewParam;
    },
    setViewCode(state, viewCodeParam) {
      state.viewCode = viewCodeParam;
    },
    setModalAddedProduct(state) {
      state.modalAddedProduct = !state.modalAddedProduct;
    },
    setInformationProduct(state, payload) {
      state.informationProduct = {
        ...payload,
      };
    },
  },
  actions: {
    setView: ({ commit }) => commit("setView"),
    setViewCode: ({ commit }) => commit("setViewCode"),
    setModalAddedProduct: ({ commit }) => commit("setModalAddedProduct"),
    setInformationProduct: ({ commit }) => commit("setInformationProduct"),
  },
  modules: {},
  getters: {
    getView(state) {
      return state.view;
    },
    getViewCode(state) {
      return state.viewCode;
    },
    getModalAddedProduct(state) {
      return state.modalAddedProduct;
    },
    getInformationProduct(state) {
      return state.informationProduct;
    },
  },
});
