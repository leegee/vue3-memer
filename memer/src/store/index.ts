import { createStore } from "vuex";

export default createStore({
  state: {
    image: ''
  },
  mutations: {
    changeImage(state, src: string) {
      state.image = src;
    }
  },
  actions: {
  },
  modules: {
  }
});
