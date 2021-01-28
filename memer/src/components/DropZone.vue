<template>
  <div
    id="dropzone"
    ref="dropzone"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop($event)"
  >
    <h1>
      {{ msg }}
      <input type="file" id="file" @change="onFileChosen($event)" />
    </h1>
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
    this.reader.onload = (e: ProgressEvent) => {
      this.setImage((e.target as FileReader).result as string);
    };
  }

  onDragOver(e: Event) {
    (this.$refs.dropzone as HTMLElement).classList.add("over");
  }

  onDragLeave(e: Event) {
    (this.$refs.dropzone as HTMLElement).classList.remove("over");
  }

  onDrop(e: DragEvent) {
    if (e.dataTransfer !== null) {
      (this.$refs.dropzone as HTMLElement).classList.remove("over");
      const files = e.dataTransfer.files;
      if (files[0].type.match(/image/)) {
        this.reader.readAsDataURL(files[0]);
      }
    }
  }

  onFileChosen(e: Event) {
    const file = (e.target! as HTMLInputElement).files![0];
    if (file.type.match(/image/)) {
      this.reader.readAsDataURL(file);
    }
  }

  setImage(src: string) {
    this.$store.commit("changeImage", src);
  }
}
</script>

<style scoped lang="scss">
#dropzone {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24pt;
  width: 100%;
  height: 100%;
  background-position: center;
  background-origin: center;
  background-repeat: no-repeat;
  border: 1pt solid black;
  filter: drop-shadow(0pt 4pt 4pt #0009);
  background: grey;
}

#dropzone.over {
  background: green;
}
</style>
