import { State } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    fontClass: "impact",
    fontSizeClass: "large",
    fontWeight: "bold",
    imageSaveSize: "original",
    fontColor: "#000000",
    fontOpacity: 100,
    canvasColor: "transparent",
    bgColor: "#ffffff",
    bgOpacity: 0,
    strokeColor: "#ffffff",
    strokeOpacity: 100,
    strokeWidth: 1,
    lineHeight: 32,
    image: "",
    largestSide: 500,
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
      state.largestSide = width > height ? width : height;
    },

    changeText(state: State, { id, style, text }) {
      state.text[id] = state.text[id] || {};
      state.text[id].partOfLayout = state.chosenLayout;
      state.text[id].id = id;
      state.text[id].text = text;
      state.lineHeight = parseInt(style.lineHeight);

      state.text[id].style = {
        color: style.color,
        textAlign: style.textAlign,
        fontFamily: style.fontFamily,
        fontSize: parseInt(style.fontSize),
        left: parseInt(style.left) || null,
        right: parseInt(style.right) || null,
        top: parseInt(style.top) || null,
        bottom: parseInt(style.bottom) || null,
        width: parseInt(style.width),
        height: parseInt(style.height),
        displayFlex: style.display && style.display === "flex",
      };
    },

    setImageSaveSize(state: State, imageSaveSize: string) {
      state.imageSaveSize = imageSaveSize;
    },

    unsetImage(state: State) {
      delete state.image;
      delete state.imageOriginal;
      delete state.width;
      delete state.height;
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

    setFontOpacity(state: State, percentage: number) {
      state.fontOpacity = percentage;
    },

    setCanvasColor(state: State, color: string) {
      state.canvasColor = color;
    },

    setBgColor(state: State, color: string) {
      state.bgColor = color;
    },

    setBgOpacity(state: State, percentage: number) {
      state.bgOpacity = percentage;
    },

    setFontStrokeColor(state: State, strokeColor: string) {
      state.strokeColor = strokeColor;
    },

    setFontStrokeOpacity(state: State, percentage: number) {
      state.strokeOpacity = percentage;
    },

    setFontStrokeWidth(state: State, strokeWidth: string) {
      state.strokeWidth = parseInt(strokeWidth);
    },

  },
  actions: {
  },
  modules: {
  }
});
