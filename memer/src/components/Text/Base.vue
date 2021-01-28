<template>
  <div class="control_container" :id="'container_' + name.toLowerCase()">
    <div class="control" :id="'control_' + name.toLowerCase()">{{ name }}</div>
    <div
      class="overlay"
      :hidden="hidden"
      :id="'overlay_' + name.toLowerCase()"
      contentEditable="true"
      @click="click($event)"
    >
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Base extends Vue {
  name = "Control";
  hidden = false;
  text = "";

  click(e: Event) {
    window.getSelection()!.selectAllChildren(e.target as Node);
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
</style>
