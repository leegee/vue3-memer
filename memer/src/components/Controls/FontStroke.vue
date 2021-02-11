<template>
  <fieldset id="font-stroke">
    <legend>Text Outline</legend>
    <input
      id="stroke-color"
      type="color"
      @change="changeColor($event.target.value)"
      :value="$store.state.strokeColor"
    />

    <select id="stroke-width" @change="changeWidth($event.target.value)">
      <option
        v-for="strokeWidth in strokeWidths"
        :key="strokeWidth"
        :class="strokeWidth"
        :selected="strokeWidth === $store.state.strokeWidth"
      >
        {{ strokeWidth }}
      </option>
    </select>
  </fieldset>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FontStroke extends Vue {
  strokeWidths = [0, 1, 2, 3, 4, 5, 6];

  changeColor(strokeColor: string) {
    this.$store.commit("setFontStrokeColor", strokeColor);
  }

  changeWidth(strokeWidth: string) {
    this.$store.commit("setFontStrokeWidth", strokeWidth);
  }
}
</script>
