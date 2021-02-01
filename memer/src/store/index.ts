import { State } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    fontClass: "impact",
    fontSizeClass: "large",
    fontWeightClass: "bold-weight",
    imageSaveSize: "original",
    image: "",
    imageOriginal: "",
    width: 0,
    height: 0,
    text: {},
  },
  mutations: {
    setDimensions(state: State, { width, height }) {
      state.width = parseInt(width);
      state.height = parseInt(height);
    },

    changeText(state: State, { id, hidden, style, text }) {
      console.log('store.changeText', id, text);
      state.text[id] = state.text[id] || {};
      state.text[id].id = id;
      state.text[id].hidden = hidden;
      state.text[id].text = text;

      // console.log("set text style for id %s", id, style);

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

    setImageSaveSize(state: State, imageSaveSize: string) {
      state.imageSaveSize = imageSaveSize;
      console.log('store.setImageSize', imageSaveSize);
    },

    setImage(state: State, { src, width, height }) {
      state.image = src;
      state.imageOriginal = src;
      state.width = width;
      state.height = height;
    },

    setFont(state: State, fontClass) {
      state.fontClass = fontClass;
    },

    setFontSizeClass(state: State, fontSizeClass: string) {
      state.fontSizeClass = fontSizeClass;
    },

    setFontWeightClass(state: State, fontWeightClass: string) {
      state.fontWeightClass = fontWeightClass;
    },

  },
  actions: {
  },
  modules: {
  }
});
