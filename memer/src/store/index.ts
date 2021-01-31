import { State } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    image: "",
    width: "",
    height: "",
    text: {},
  },
  mutations: {
    setDimensions(state: State, { width, height }) {
      state.width = width;
      state.height = height;
    },

    setTextStyle(state: State, { id, style }) {
      console.log(style);
      state.text[id] = state.text[id] || {};
      state.text[id].style = {
        fontFamily: style["font-family"],
        fontSize: style["font-size"],
        left: style.left,
        right: style.right,
        top: style.top,
        bottom: style.bottom,
        color: style.color,
        width: style.width,
        height: style.height,
        textAlign: style.textAlign,
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
