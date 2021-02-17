<template>
  <fieldset>
    <legend>Image Background</legend>

    <span
      v-show="$store.state.canvasColor !== 'transparent'"
      id="transparent-bg"
      title="Transparent"
      @click="change('transparent')"
      >Make<br />Transparent</span
    >

    <span
      v-show="$store.state.canvasColor === 'transparent'"
      id="transparent-bg-selected"
      >Is<br />Transparent</span
    >

    <input
      type="color"
      @change="change($event.target.value)"
      :value="$store.state.canvasColor"
    />
  </fieldset>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class CanvasColor extends Vue {
  change(fontColor: string) {
    this.$store.commit("setCanvasColor", fontColor);
  }
}
</script>

<style scoped>
#transparent-bg {
  text-decoration: none;
  color: var(--app-bg);
}
#transparent-bg-selected {
  font-size: 80%;
  text-transform: lowercase;
  font-variant: small-caps;
}
</style>
