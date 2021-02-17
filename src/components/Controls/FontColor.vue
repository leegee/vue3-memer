<template>
  <fieldset id="font-color">
    <legend>Text Color</legend>
    <input
      id="font-color-input"
      type="color"
      @change="changeColor($event.target.value)"
      :value="$store.state.fontColor"
    />

    <input
      type="range"
      min="0"
      max="100"
      @change="changeOpacity($event.target.value)"
      :value="$store.state.bgOpacity"
    />
  </fieldset>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FontColor extends Vue {
  changeColor(fontColor: string) {
    this.$store.commit("setFontColor", fontColor);
  }

  changeOpacity(percentage: number) {
    this.$store.commit("setFontOpacity", percentage);
  }
}
</script>
