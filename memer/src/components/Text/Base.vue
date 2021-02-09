<template>
  <div
    class="overlay"
    :id="id"
    :ref="id"
    contentEditable="true"
    @focus="selectText($event)"
    @click="selectText($event)"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Base extends Vue {
  id = "control_id";
  defaultText = "Default Text";
  text = "";

  mounted() {
    this.text = this.$store.state.text[this.id]
      ? this.$store.state.text[this.id].text
      : this.defaultText || "";
  }

  beforeUnmount() {
    this.updateText();
  }

  selectText(e: Event) {
    const s = window.getSelection();
    if (s) {
      s.selectAllChildren(e.target as Node);
    }
  }

  updateText() {
    const text = (this.$refs[this.id] as HTMLElement).innerText;
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
  max-width: 100%;
  width: 100%;
  border: 1pt dotted red;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.overlay:focus {
  outline: 1pt solid red;
}
</style>
