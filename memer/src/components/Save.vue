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
    canvas.width = parseInt(this.$store.state.width);
    canvas.height = parseInt(this.$store.state.height);

    const ctx = canvas.getContext("2d");

    if (ctx === null) {
      throw new Error("Well, holy moly");
    }

    ctx!.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Place text
    Object.keys(this.$store.state.text).forEach((text) => {
      ctx.fillStyle = this.$store.state.text[text].style.color;
      ctx.font =
        this.$store.state.text[text].style.fontSize +
        " " +
        this.$store.state.text[text].style.fontFamily;

      const dims: {
        [key: string]: number | null;
      } = {};

      ["left", "right", "top", "bottom", "width", "height"].forEach((i) => {
        dims[i] =
          this.$store.state.text[text].style[i] === "auto"
            ? null
            : parseInt(this.$store.state.text[text].style[i]);
      });

      const x =
        dims.left !== null ? dims.left : parseInt(this.$store.state!.width) - dims.right!;
      const y =
        dims.top !== null ? dims.top : parseInt(this.$store.state.height) - dims.height!;

      console.log(ctx.fillStyle, this.$store.state.text[text].text, x, y);

      ctx.fillText(this.$store.state.text[text].text, x, y);
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
