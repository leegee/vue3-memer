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
import opaqueColor from "@/opaqueColor";

function renderText(
  ctx: CanvasRenderingContext2D,
  stroke: boolean,
  text: string,
  x: number,
  y: number
) {
  console.debug("renderText ", x, y, text);
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
    if (
      !this.$store.state.image ||
      !this.$store.state.width ||
      !this.$store.state.height
    ) {
      throw new Error("composedImage state error");
    }

    const img = new Image();
    img.src = this.$store.state.image;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (ctx === null) {
      throw new Error("Well, holy moly, no 2D canvas rendering context");
    }

    canvas.width = this.$store.state.width;
    canvas.height = this.$store.state.height;

    console.log("this.$store.state.canvasColor", this.$store.state.canvasColor);
    if (this.$store.state.canvasColor !== "transparent") {
      ctx.fillStyle = this.$store.state.canvasColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.textBaseline = "top";
    ctx.textAlign = "center";

    const textBgColor = opaqueColor(
      this.$store.state.fontBgColor,
      this.$store.state.fontBgOpacity
    );
    const textFgColor = opaqueColor(
      this.$store.state.fontColor,
      this.$store.state.fontOpacity
    );

    Object.keys(this.$store.state.text).forEach((text: string) => {
      if (
        this.$store.state.text[text].text === undefined ||
        this.$store.state.text[text].text.match(/^\s*$/) ||
        this.$store.state.text[text].partOfLayout !==
          this.$store.state.chosenLayout
      ) {
        return;
      }

      ctx.font =
        this.$store.state.fontWeight +
        " " +
        this.$store.state.text[text].style.fontSize +
        "px " +
        this.$store.state.text[text].style.fontFamily;

      const stroke = this.$store.state.strokeWidth !== 0;

      if (stroke) {
        ctx.strokeStyle = this.$store.state.strokeColor;
        ctx.lineWidth = this.$store.state.strokeWidth;
      }

      console.debug("INPUT ALL [%s]", this.$store.state.text[text].text);

      const linesOfOutput: string[] = [];

      this.$store.state.text[text].text
        .split(/[\n\r\f]/)
        .forEach((lineOfInput) => {
          let lineReadButNotRendered = "";

          lineOfInput.split(/\s+/g).forEach((word) => {
            const toMeasure = lineReadButNotRendered + " " + word;
            const metrics = ctx.measureText(toMeasure);

            if (metrics.width < this.$store.state.text[text].style.width) {
              lineReadButNotRendered +=
                (lineReadButNotRendered ? " " : "") + word;
            } else {
              linesOfOutput.push(lineReadButNotRendered);
              lineReadButNotRendered = word;
            }
          });

          linesOfOutput.push(lineReadButNotRendered);
        });

      const x = Math.abs(
        (this.$store.state.text[text].style.left || 0) +
          this.$store.state.text[text].style.width / 2
      );

      let y =
        (this.$store.state.text[text].style.top || 0) +
        this.$store.state.text[text].style.height / 2 -
        (this.$store.state.lineHeight / 2) * linesOfOutput.length;

      ctx.fillStyle = textBgColor;
      ctx.fillRect(
        this.$store.state.text[text].style.left || 0 - 1,
        this.$store.state.text[text].style.top || 0 - 1,
        (this.$store.state.text[text].style.width || 0) + x + 1,
        (this.$store.state.text[text].style.top || 0) +
          (this.$store.state.text[text].style.height || 0) +
          1
      );

      ctx.fillStyle = textFgColor;

      console.log({ textBgColor, textFgColor });

      linesOfOutput.forEach((lineOfText) => {
        renderText(ctx, stroke, lineOfText, x, y);
        y += this.$store.state.lineHeight;
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
  border: none;
  object-fit: cover;
  max-width: 99%;
  max-height: 90%;
}
</style>
