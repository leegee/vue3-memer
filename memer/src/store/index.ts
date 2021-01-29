import { State } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    image: '',
    text: {},
  },
  mutations: {
    changeText(state: State, { name, hidden, text }) {
      state.text[name] = state.text[name] || {};
      state.text[name] = {
        name, hidden, text
      };
    },

    changeImage(state: State, src: string) {
      state.image = src;
    },
  },
  actions: {
  },
  modules: {
  }
});
