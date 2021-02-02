<template>
  <button id="save" v-show="$store.state.image" @click="save()">Save</button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

const DEBUG = true;

export default class Home extends Vue {
  async save() {
    if (DEBUG) {
      const img = document.createElement("img");
      img.src = await this.composedImage();
      document.body.appendChild(img);
    } else {
      const a = document.createElement("a");
      a.href = await this.composedImage();
      a.download = "meme.png";
      document.body.appendChild(a);
      a.click();
    }
  }

  composedImage() {
    const img = new Image();
    img.src = this.$store.state.image;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (ctx === null) {
      throw new Error("Well, holy moly");
    }

    canvas.width = this.$store.state.width;
    canvas.height = this.$store.state.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    Object.keys(this.$store.state.text).forEach((text) => {
      if (this.$store.state.text[text].text === undefined) return;

      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = this.$store.state.fontColor; // text[text].style.color;
      ctx.font =
        this.$store.state.text[text].style.fontSize +
        " " +
        this.$store.state.text[text].style.fontFamily;

      // TODO: Properly either set a value in the CSS and use here, or render to canvas a measure
      const lineHeight = parseInt(this.$store.state.text[text].style.fontSize) * 1.2;

      const dims: {
        [key: string]: number | null;
      } = {};

      const x =
        (this.$store.state.text[text].style.left || 0) +
        this.$store.state.text[text].style.width / 2;

      console.log(text, this.$store.state.text[text].style.top);

      let y =
        // eslint-disable-next-line
        this.$store.state.text[text].style.top !== null
          ? this.$store.state.text[text].style.top || 1
          : this.$store.state.height - this.$store.state.text[text].style.height;

      if (text === "overlay_bottom") {
        y -= lineHeight;
      }

      this.$store.state.text[text].text.split(/[\n\r]/).forEach((lineOfText) => {
        y += lineHeight;

        ctx.fillText(lineOfText, Math.floor(x), Math.floor(y));

        if (this.$store.state.text[text].style.strokeWidth > 0) {
          ctx.strokeStyle = this.$store.state.text[text].style.strokeColor;
          ctx.lineWidth = this.$store.state.text[text].style.strokeWidth;
          ctx.strokeText(lineOfText, Math.floor(x), Math.floor(y));
        }
      });
    });

    return canvas.toDataURL("image/png");
  }
}
</script>

<style scoped>
#save {
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  font-size: 32pt;
}
</style>
