<template>
  <button id="save" v-show="$store.state.image" @click="save()">Save</button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {
  async save() {
    const img = document.createElement("img");
    img.src = await this.composedImage();
    document.body.appendChild(img);

    // const a = document.createElement("a");
    // a.href = await this.composedImage();
    // a.download = "meme.png";
    // document.body.appendChild(a);
    // a.click();
  }

  composedImage() {
    const img = new Image();
    img.src = this.$store.state.image;

    const canvas = document.createElement("canvas");
    canvas.width = this.$store.state.width;
    canvas.height = this.$store.state.height;

    const ctx = canvas.getContext("2d");

    if (ctx === null) {
      throw new Error("Well, holy moly");
    }

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    Object.keys(this.$store.state.text).forEach((text) => {
      if (this.$store.state.text[text].text === undefined) return;

      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = this.$store.state.text[text].style.color;
      ctx.font =
        this.$store.state.text[text].style.fontSize +
        " " +
        this.$store.state.text[text].style.fontFamily;

      const lineHeight = parseInt(this.$store.state.text[text].style.fontSize); // and...

      const dims: {
        [key: string]: number | null;
      } = {};

      dims.left = this.$store.state.text[text].style.left;
      dims.right = this.$store.state.text[text].style.right;
      dims.top = this.$store.state.text[text].style.top;
      dims.bottom = this.$store.state.text[text].style.bottom;
      dims.width = this.$store.state.text[text].style.width;
      dims.width = this.$store.state.text[text].style.width;

      const width =
        this.$store.state.text[text].style.width -
        (this.$store.state.text[text].style.left || 0) -
        (this.$store.state.text[text].style.right || 0);

      const x = (this.$store.state.text[text].style.left || 0) + width / 2;

      let y =
        // eslint-disable-next-line
        dims.top !== null ? dims.top : this.$store.state.height - dims.height!;

      switch (text) {
        case "overlay_top":
          y += lineHeight / 2;
          console.log("add a bit");
          break;
        case "overlay_bottom":
          y -= lineHeight / 2;
          console.log("subtract a bit");
          break;
      }

      console.log(text, {
        color: ctx.fillStyle,
        text: this.$store.state.text[text].text,
        x,
        y,
      });

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
