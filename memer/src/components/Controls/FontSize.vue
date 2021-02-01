<template>
  <select id="font-size" @change="change($event.target.value)">
    <optgroup label="Text size"></optgroup>
    <option
      v-for="fontSizeClass in fontSizeClasses"
      :key="fontSizeClass"
      :class="fontSizeClass"
      :selected="fontSizeClass === $store.state.fontSizeClass"
    >
      {{ fontSizeClass }}
    </option>
  </select>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FontSize extends Vue {
  fontSizeClasses = ["smallest", "small", "normal", "medium", "large", "larger", "huge"];

  change(fontSizeClass: string) {
    this.$store.commit("setFontSizeClass", fontSizeClass);
  }
}
</script>

<style scoped lang="scss">
#font-size {
  display: block;
  padding: 0 1rem;
  color: black;
  font-size: 2rem;
  margin: 1rem auto;
}
</style>
