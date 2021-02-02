<template>
  <div
    class="overlay"
    :id="id"
    :ref="id"
    contentEditable="true"
    @click="click($event)"
    @input="changeText($event.target.innerText)"
  >
    {{ $store.state.text[id] ? $store.state.text[id].text : defaultText }}
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
    console.log("Base.changeText commit", this.id, text);
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
  border: 1px dotted red;
  position: absolute;
}
</style>
