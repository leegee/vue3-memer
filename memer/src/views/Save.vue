<template>
  <div id="save">
    <div>
      <img ref="export" @click="save()" />
    </div>
    <div @click="save()">Click to save</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

function renderText(
  ctx: CanvasRenderingContext2D,
  stroke: boolean,
  text: string,
  x: number,
  y: number
) {
  console.log("renderText ", x, y, text);
  ctx.fillText(text, x, y);
  if (stroke) {
    ctx.strokeText(text, x, y);
  }
}

export default class Home extends Vue {
  async mounted() {
    (this.$refs.export as HTMLImageElement).src = this.composedImage();
  }

  async save() {
    const a = document.createElement("a");
    a.href = this.composedImage();
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
        this.$store.state.text[text].partOfLayout !==
          this.$store.state.chosenLayout
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

      const metricsForHeight = ctx.measureText("M");
      const lineHeight =
        metricsForHeight.fontBoundingBoxAscent +
        metricsForHeight.fontBoundingBoxDescent;

      // const lineHeight = parseInt(this.$store.state.text[text].style.fontSize) * 1.2;

      const x = Math.abs(
        (this.$store.state.text[text].style.left || 0) +
          this.$store.state.text[text].style.width / 2
      );

      let y =
        (this.$store.state.text[text].style.top || 0) +
        this.$store.state.text[text].style.height / 2;

      this.$store.state.text[text].text
        .split(/[\n\r\f]/)
        .forEach((lineOfText) => {
          let stroke = false;

          if (this.$store.state.strokeWidth !== "0") {
            ctx.strokeStyle = this.$store.state.strokeColor;
            ctx.lineWidth = parseInt(this.$store.state.strokeWidth);
            stroke = true;
          }

          let lineReadButNotRendered = "";

          lineOfText.split(/\s+/g).forEach((word) => {
            const toMeasure = lineReadButNotRendered + " " + word;
            const metrics = ctx.measureText(toMeasure);
            if (metrics.width < this.$store.state.text[text].style.width) {
              lineReadButNotRendered +=
                (lineReadButNotRendered ? " " : "") + word;
              console.log(
                "# Join word to make [%s] because %d < %d",
                lineReadButNotRendered,
                metrics.width,
                this.$store.state.text[text].style.width
              );
            } else {
              renderText(
                ctx,
                stroke,
                lineReadButNotRendered,
                Math.floor(x),
                Math.floor(y)
              );
              lineReadButNotRendered = word;
              y += lineHeight;
              console.log("Render, and y inc by %d to", lineHeight, y);
            }
          });

          renderText(
            ctx,
            stroke,
            lineReadButNotRendered,
            Math.floor(x),
            Math.floor(y)
          );
          console.log("Rendered [%s]");
          console.log("--------------");
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
  background: url("../assets/trans.jpg") center repeat;
  border: 1px solid var(--app-fg);
  object-fit: cover;
  max-width: 99%;
  max-height: 90%;
}
</style>
