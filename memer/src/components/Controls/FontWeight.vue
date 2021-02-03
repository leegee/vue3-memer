<template>
  <fieldset id="font-weight">
    <legend>Text Weight</legend>

    <select id="font-size" @change="change($event.target.value)">
      <option
        v-for="fontWeightClass in fontWeightClasses"
        :key="fontWeightClass"
        :selected="fontWeightClass === $store.state.fontWeightClass"
        :style="{
          'font-weight': fontWeightClass.replace(/-weight$/, ''),
        }"
      >
        {{ fontWeightClass.replace(/-weight$/, "") }}
      </option>
    </select>
  </fieldset>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FontWeight extends Vue {
  fontWeightClasses = ["light-weight", "normal-weight", "bold-weight", "bolder-weight"];

  change(fontWeightClass: string) {
    this.$store.commit("setFontWeightClass", fontWeightClass);
  }
}
</script>
