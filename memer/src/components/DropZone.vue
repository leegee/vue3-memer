<template>
  <div
    id="dropzone"
    ref="dropzone"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop($event)"
  >
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class DropZone extends Vue {
  msg!: string;

  reader = new FileReader();

  mounted() {
    this.reader.onload = (f) => {
      if (f.target === null) return; // fuck ts
      this.setImage(f.target.result as string);
    };
  }

  setImage(src: string) {
    (this.$refs.dropzone as HTMLElement).style.backgroundImage =
      "url(" + src + ")";
    this.$store.commit("changeImage", src as string);
  }

  onDragOver(e: Event) {
    (this.$refs.dropzone as HTMLElement).classList.add("over");
  }

  onDragLeave(e: Event) {
    (this.$refs.dropzone as HTMLElement).classList.remove("over");
  }

  onDrop(e: DragEvent) {
    if (e.dataTransfer !== null) {
      const files = e.dataTransfer.files;
      const file: File = files[0];
      (this.$refs.dropzone as HTMLElement).classList.remove("over");
      this.reader.readAsDataURL(file);
    }
  }
}
</script>

<style scoped lang="scss">
#dropzone {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: calc(-0.5 * var(--meme-height));
  margin-left: calc(-0.5 * var(--meme-height));
  width: var(--meme-width);
  height: var(--meme-height);
  border: 1pt solid black;
  filter: drop-shadow(0pt 4pt 4pt #0009);
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24pt;
  background-position: center;
  background-origin: center;
  background-repeat: no-repeat;
}

#dropzone.over {
  background: green;
}
</style>
