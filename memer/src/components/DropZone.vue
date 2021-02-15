<template>
  <div
    id="dropzone"
    ref="dropzone"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop($event)"
  >
    <h1 id="msg">{{ msg }}</h1>
    <input type="file" ref="file" id="file" @change="onFileChosen($event)" />
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

  created() {
    window.addEventListener("paste", (e: Event) => {
      this.retrieveImageFromClipboardAsBlob(e as ClipboardEvent);
    });
  }

  retrieveImageFromClipboardAsBlob(pasteEvent: ClipboardEvent) {
    if ((pasteEvent as ClipboardEvent).clipboardData !== null) {
      const items =
        (pasteEvent.clipboardData && pasteEvent.clipboardData.items) || [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") === -1) continue;
        const file = items[i].getAsFile();
        this.reader.readAsDataURL(file as Blob);
        break;
      }
    }
  }

  setImage(src: string) {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const ratio =
        img.width / this.$store.state.largestSide >
        img.height / this.$store.state.largestSide
          ? img.width / this.$store.state.largestSide
          : img.height / this.$store.state.largestSide;

      img.width = img.width / ratio;
      img.height = img.height / ratio;

      this.$store.commit("setImage", {
        src,
        width: img.width,
        height: img.height,
      });
    };
  }

  onDragOver() {
    (this.$refs.dropzone as HTMLElement).classList.add("over");
  }

  onDragLeave() {
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
    // eslint-disable-next-line
    const file = (e.target! as HTMLInputElement).files![0];
    if (file.type.match(/image/)) {
      this.reader.readAsDataURL(file);
    }
  }
}
</script>

<style scoped lang="scss">
#dropzone {
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  background-color: grey;
  font-size: 24pt;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-items: center;
}

@media (orientation: portrait) {
  #msg {
    font-size: 18pt;
  }
}

#dropzone.over {
  background: green;
}

#file {
  font-size: calc(var(--meme-height));
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
}
</style>
