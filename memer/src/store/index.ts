import { State } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    fontClass: "impact",
    fontSizeClass: "large",
    fontWeight: "bold",
    imageSaveSize: "original",
    fontColor: "#000000",
    bgColor: "transparent",
    strokeColor: "#ffffff",
    strokeWidth: "1px",
    lineHeight: "1",
    image: "",
    largestSize: 500,
    imageOriginal: "",
    width: 0,
    height: 0,
    text: {},
    chosenLayout: "topBottom",
    showModal: false,
  },
  mutations: {
    showModal(state: State, show: boolean) {
      state.showModal = show;
    },

    setChosenLayout(state: State, chosenLayout) {
      state.chosenLayout = chosenLayout;
    },

    setDimensions(state: State, { width, height }) {
      state.width = width;
      state.height = height;
      state.largestSize = width > height ? width : height;
    },

    changeText(state: State, { id, style, text }) {
      state.text[id] = state.text[id] || {};
      state.text[id].partOfLayout = state.chosenLayout;
      state.text[id].id = id;
      state.text[id].text = text;
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

    setfontWeight(state: State, fontWeight: string) {
      state.fontWeight = fontWeight;
    },

    setFontColor(state: State, fontColor: string) {
      state.fontColor = fontColor;
    },

    setBgColor(state: State, bgColor: string) {
      state.bgColor = bgColor;
    },

    setFontStrokeColor(state: State, strokeColor: string) {
      state.strokeColor = strokeColor;
    },

    setFontStrokeWidth(state: State, strokeWidth: string) {
      state.strokeWidth = "" + strokeWidth;
    },

  },
  actions: {
  },
  modules: {
  }
});
