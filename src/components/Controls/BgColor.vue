<template>
  <fieldset>
    <legend>Text Background</legend>

    <input
      type="color"
      @change="changeColor($event.target.value)"
      :value="$store.state.bgColor"
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

export default class BgColor extends Vue {
  changeColor(color: string) {
    this.$store.commit("setBgColor", color);
  }

  changeOpacity(percentage: number) {
    this.$store.commit("setBgOpacity", percentage);
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
