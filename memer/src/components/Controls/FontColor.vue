<template>
  <input
    id="font-color"
    type="color"
    @change="change($event.target.value)"
    value="$store.state.color"
  />
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
  display: block;
  padding: 0 1rem;
  color: black;
  font-color: 2rem;
  margin: 1rem auto;
}
</style>
