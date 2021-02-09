<template>
  <fieldset id="font-weight">
    <legend>Text Weight</legend>

    <select id="font-size" @change="change($event.target.value)">
      <option
        v-for="fontWeight in fontWeights"
        :key="fontWeight"
        :selected="fontWeight === $store.state.fontWeight"
        :style="{
          'font-weight': fontWeight,
        }"
      >
        {{ fontWeight }}
      </option>
    </select>
  </fieldset>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FontWeight extends Vue {
  fontWeights = ["light", "normal", "bold", "bolder"];

  change(fontWeight: string) {
    this.$store.commit("setfontWeight", fontWeight);
  }
}
</script>
