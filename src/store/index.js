import { createStore } from "vuex";

export default createStore({
  state: {
    view: "",
    viewCode: 0,
    modalAddedProduct: false,
    products: [],
    informationProduct: {},
    modalMiniCart: false,
    cartProducts: [],
    totalProducts: 0,
  },
  mutations: {
    setView(state, viewParam) {
      state.view = viewParam;
    },
    setViewCode(state, viewCodeParam) {
      state.viewCode = viewCodeParam;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setModalAddedProduct(state) {
      state.modalAddedProduct = !state.modalAddedProduct;
    },
    setInformationProduct(state, payload) {
      state.informationProduct = {
        ...payload,
      };
    },
    setShowModalMiniCart(state) {
      state.modalMiniCart = true;
    },
    setHideModalMiniCart(state) {
      state.modalMiniCart = false;
    },
    setCartProducts(state, payload) {
      state.cartProducts.push(payload);
    },
    setTotalProducts(state, priceProduct) {
      state.totalProducts += priceProduct;
    },
  },
  actions: {
    setView: ({ commit }) => commit("setView"),
    setViewCode: ({ commit }) => commit("setViewCode"),
    setProducts: ({ commit }) => commit("setProducts"),
    setModalAddedProduct: ({ commit }) => commit("setModalAddedProduct"),
    setInformationProduct: ({ commit }) => commit("setInformationProduct"),
    setCartProducts: ({ commit }) => commit("setCartProducts"),
    setTotalProducts: ({ commit }) => commit("setTotalProducts"),
    setShowModalMiniCart: ({ commit }) => commit("setShowModalMiniCart"),
    setHideModalMiniCart: ({ commit }) => commit("setHideModalMiniCart"),
  },
  modules: {},
  getters: {
    getView(state) {
      return state.view;
    },
    getViewCode(state) {
      return state.viewCode;
    },
    getProducts(state) {
      return state.products;
    },
    getModalAddedProduct(state) {
      return state.modalAddedProduct;
    },
    getInformationProduct(state) {
      return state.informationProduct;
    },
    getCartProducts(state) {
      return state.cartProducts;
    },
    getTotalProducts(state) {
      return state.totalProducts;
    },
    getModalMiniCart(state) {
      return state.modalMiniCart;
    },
  },
});
