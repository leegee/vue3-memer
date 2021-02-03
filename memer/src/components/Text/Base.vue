<template>
  <div
    class="overlay"
    :id="id"
    :ref="id"
    contentEditable="true"
    @click="click($event)"
    @input="changeText($event.target.innerText)"
  >
    {{ $store.state.text[id] ? $store.state.text[id].text : "" }}
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Base extends Vue {
  id = "control_id";
  defaultText = "Default Text";

  click(e: Event) {
    const s = window.getSelection();
    if (s) {
      s.selectAllChildren(e.target as Node);
    }
  }

  // TODO debounce, but not really needed...
  changeText(text: string) {
    this.$store.commit("changeText", {
      id: this.id,
      style: window.getComputedStyle(this.$refs[this.id] as HTMLElement),
      text,
    });
  }
}
</script>

<style scoped lang="scss">
.overlay {
  position: absolute;
  display: block;
  text-align: center;
  min-height: 1em;
  max-width: var(--meme-width);
  width: var(--meme-width);
  border: 3pt dotted red;
  word-wrap: break-word;
  overflow-wrap: break-word;
  // overflow-x: hidden;
}
</style>
