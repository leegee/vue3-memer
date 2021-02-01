<template>
  <button id="save" v-show="$store.state.image" @click="save()">Save</button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

const DEBUG = true;

export const imageSaveSizes = ["original", "640", "1024", "2048"];

export function getScaledSize(
  size: string | number,
  width: number,
  height: number,
  minSize?: number
): [number, number] {
  if (size === "original") {
    return [width, height];
  }
  const target = parseInt(size as string);
  let max = width > height ? width : height;
  if (minSize && max < minSize) {
    max = minSize;
  }
  const ratio = width / max > height / max ? width / target : height / target;
  const rwidth = width / ratio;
  const rheight = height / ratio;
  return [rwidth, rheight];
}

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

    const [width, height] = getScaledSize(
      this.$store.state.imageSaveSize,
      this.$store.state.width,
      this.$store.state.height
    );

    canvas.width = width;
    canvas.height = height;
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

      dims.left = this.$store.state.text[text].style.left;
      dims.right = this.$store.state.text[text].style.right;
      dims.top = this.$store.state.text[text].style.top;
      dims.bottom = this.$store.state.text[text].style.bottom;
      dims.width = this.$store.state.text[text].style.width;
      dims.height = this.$store.state.text[text].style.height;

      const width =
        this.$store.state.text[text].style.width -
        (this.$store.state.text[text].style.left || 0) -
        (this.$store.state.text[text].style.right || 0);

      const x = (this.$store.state.text[text].style.left || 0) + width / 2;

      let y =
        // eslint-disable-next-line
        dims.top !== null ? dims.top : this.$store.state.height - dims.height!;

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
