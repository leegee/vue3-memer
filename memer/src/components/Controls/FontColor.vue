<template>
  <fieldset id="font-color">
    <legend>Text Color</legend>
    <input
      id="font-color-input"
      type="color"
      @change="change($event.target.value)"
      value="$store.state.fontColor"
    />
  </fieldset>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FontColor extends Vue {
  change(fontColor: string) {
    this.$store.commit("setFontColor", fontColor);
  }
}
</script>

<style scoped>
#font-color {
}
</style>
