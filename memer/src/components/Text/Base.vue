<template>
  <div class="text_container" :id="'container_' + name.toLowerCase()">
    <div
      class="overlay"
      :hidden="hidden"
      :id="id"
      :ref="id"
      contentEditable="true"
      @click="click($event)"
      @input="changeText($event.target)"
    >
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Base extends Vue {
  name = "Control";
  id = "";
  hidden = false;
  text = "";

  // Set the ID used in DOM (and elsewhere) before DOM render
  beforeMount() {
    this.id = "overlay_" + this.name.toLowerCase();
    this.text = this.$store.state.text[this.id]
      ? this.$store.state.text[this.id].text
      : this.text;
  }

  click(e: Event) {
    const s = window.getSelection();
    if (s) {
      s.selectAllChildren(e.target as Node);
    }
  }

  // TODO debounce, but not really needed...
  changeText(node: HTMLElement) {
    // const text = [...node.children].reduce((prev, curr, i) => {
    //   return (prev || "") + (curr as HTMLElement).innerText + "\n";
    // }, "");

    const text = node.innerText;

    console.log("Base.changeText commit", this.id, text);
    this.$store.commit("changeText", {
      hidden: this.hidden,
      id: this.id,
      style: window.getComputedStyle(this.$refs[this.id] as HTMLElement),
      text,
    });
  }
}
</script>

<style scoped lang="scss">
.text_container {
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  width: var(--meme-width);
}
</style>
