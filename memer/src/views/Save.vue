<template>
  <div id="save">
    <div>
      <img ref="export" @click="save()" />
    </div>
    <div>Click to save</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Layouts } from "@/components/Text.vue";

export default class Home extends Vue {
  async mounted() {
    (this.$refs.export as HTMLImageElement).src = await this.composedImage();
  }

  async save() {
    const a = document.createElement("a");
    a.href = await this.composedImage();
    a.download = "meme.png";
    document.body.appendChild(a);
    a.click();
    // remove a
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
      if (
        this.$store.state.text[text].text === undefined ||
        this.$store.state.text[text].text.match(/^\s*$/) ||
        this.$store.state.text[text].partOfLayout !== this.$store.state.chosenLayout
      ) {
        return;
      }

      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = this.$store.state.fontColor; // text[text].style.color;
      ctx.font =
        this.$store.state.text[text].style.fontSize +
        " " +
        this.$store.state.text[text].style.fontFamily;

      // display: flex;
      // justify-content: center;
      // align-items: center;

      // TODO: Properly either set a value in the CSS and use here, or render to canvas a measure
      const lineHeight = parseInt(this.$store.state.text[text].style.fontSize) * 1.2;

      const x = Math.abs(
        (this.$store.state.text[text].style.left || 0) +
          this.$store.state.text[text].style.width / 2
      );

      let y =
        (this.$store.state.text[text].style.top || 0) +
        this.$store.state.text[text].style.height / 2;

      this.$store.state.text[text].text.split(/[\n\r]/).forEach((lineOfText) => {
        ctx.fillText(lineOfText, Math.floor(x), Math.floor(y));

        if (this.$store.state.strokeWidth !== "0") {
          ctx.strokeStyle = this.$store.state.strokeColor;
          ctx.lineWidth = parseInt(this.$store.state.strokeWidth);
          ctx.strokeText(lineOfText, Math.floor(x), Math.floor(y));
        }

        y += lineHeight;
      });
    });

    return canvas.toDataURL("image/png");
  }
}
</script>

<style scoped>
#save {
  width: auto;
  margin: 0 auto;
  max-width: var(--meme-width);
  text-align: center;
}
img {
  margin: 1rem auto;
  border: 1px solid var(--app-fg);
  object-fit: cover;
  width: 100%;
  height: auto;
}
</style>
