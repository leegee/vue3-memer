import { State } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    image: '',
    text: {},
  },
  mutations: {
    setTextStyle(state: State, { id, style }) {
      state.text[id] = state.text[id] || {};
      state.text[id].style = {
        fontFamily: style["font-family"],
        fontSize: style["font-size"],
        left: style.left,
        right: style.right,
        top: style.top,
        bottom: style.bottom,
      };
    },

    changeText(state: State, { id, hidden, text }) {
      state.text[id] = state.text[id] || {};
      state.text[id].id = id;
      state.text[id].hidden = hidden;
      state.text[id].text = text;
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
