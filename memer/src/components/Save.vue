<template>
  <button id="save" v-show="$store.state.image" @click="save()">Save</button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {
  async save() {
    const a = document.createElement("a");
    a.href = await this.composedImage();
    a.download = "meme.png";
    document.body.appendChild(a);
    a.click();
  }

  composedImage() {
    const img = new Image();
    img.src = this.$store.state.image;

    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    ctx!.drawImage(img, 0, 0);

    // Place text
    Object.keys(this.$store.state.text).forEach((text) => {
      console.log(
        "text: ",
        this.$store.state.text[text].text,
        "top:",
        this.$store.state.text[text].style.top,
        "bottom:",
        this.$store.state.text[text].style.bottom,
        "left:",
        this.$store.state.text[text].style.left,
        "right:",
        this.$store.state.text[text].style.right,
        "fontFamily:",
        this.$store.state.text[text].style.fontFamily,
        "fontSize:",
        this.$store.state.text[text].style.fontSize
      );
    });

    return canvas.toDataURL("image/png");
  }
}
</script>

<style scoped>
#save {
  position: absolute;
  bottom: -5em;
  text-align: center;
  cursor: pointer;
}
</style>
