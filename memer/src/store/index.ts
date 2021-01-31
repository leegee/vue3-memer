import { State } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    image: "",
    width: 0,
    height: 0,
    text: {},
  },
  mutations: {
    setDimensions(state: State, { width, height }) {
      state.width = parseInt(width);
      state.height = parseInt(height);
    },

    setTextStyle(state: State, { id, style }) {
      console.log(style);
      state.text[id] = state.text[id] || {};
      state.text[id].style = {
        color: style.color,
        textAlign: style.textAlign,
        fontFamily: style["font-family"],
        fontSize: style["font-size"],
        left: parseInt(style.left) || null,
        right: parseInt(style.right) || null,
        top: parseInt(style.top) || null,
        bottom: parseInt(style.bottom) || null,
        width: parseInt(style.width),
        height: parseInt(style.height),
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
