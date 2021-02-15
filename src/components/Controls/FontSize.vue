<template>
  <fieldset>
    <legend>Text Size</legend>
    <select id="font-size" @change="change($event.target.value)">
      <option
        v-for="fontSizeClass in fontSizeClasses"
        :key="fontSizeClass"
        :class="fontSizeClass"
        :selected="fontSizeClass === $store.state.fontSizeClass"
      >
        {{ fontSizeClass }}
      </option>
    </select>
  </fieldset>
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
