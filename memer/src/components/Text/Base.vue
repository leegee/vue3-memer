<template>
  <div class="control_container" :id="'container_' + name.toLowerCase()">
    <div class="control" :id="'control_' + name.toLowerCase()">{{ name }}</div>
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
// import { debounce } from "debounce";

export default class Base extends Vue {
  name = "Control";
  id = "";
  hidden = false;
  text = "";

  // Set the ID used in DOM (and elsewhere) before DOM render
  beforeMount() {
    this.id = "overlay_" + this.name.toLowerCase();
  }

  // Store the CSS values for later image rendering
  mounted() {
    this.$store.commit("setTextStyle", {
      id: this.id,
      style: window.getComputedStyle(this.$refs[this.id] as HTMLElement),
    });
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

    this.$store.commit("changeText", {
      hidden: this.hidden,
      id: this.id,
      text,
    });
  }
}
</script>

<style scoped lang="scss">
.control_container {
  width: 100%;
  height: 100%;
}
.control {
  position: absolute;
  top: calc(50% + (0.5 * var(--meme-height)));
  left: 0;
  width: 100%;
  margin-top: 32pt;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24pt;
  background: black;
  color: white;
  font-size: 14pt;
  padding: 0.3em 0.6em;

  display: none;
}

.overlay {
  position: absolute;
  width: var(--meme-width);
  background-color: #fff6;
  color: black;
  font-size: 48px;
}

.overlay > * {
  background: pink;
  display: inline;
}
</style>
