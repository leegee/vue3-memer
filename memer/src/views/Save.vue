<template>
  <div id="save">
    <div>
      <img id="export" ref="export" />
    </div>
    <div>
      <button id="save-button" v-show="$store.state.image" @click="save()">Save</button>
    </div>
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

      // TODO: Properly either set a value in the CSS and use here, or render to canvas a measure
      const lineHeight = parseInt(this.$store.state.text[text].style.fontSize) * 1.2;

      const x =
        (this.$store.state.text[text].style.left || 0) +
        this.$store.state.text[text].style.width / 2;

      let y: number;

      if (this.$store.state.text[text].style.top !== null) {
        y =
          (this.$store.state.text[text].style.top || 1) +
          parseInt(this.$store.state.text[text].style.fontSize);
      } else {
        y = this.$store.state.height - this.$store.state.text[text].style.height;
      }

      // TODO: Why this value?
      y -= parseInt(this.$store.state.text[text].style.fontSize) / 3;

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
  width: 100%;
  text-align: center;
}
#export {
  margin: 1rem;
}
#save-button {
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  font-size: 32pt;
}
</style>
