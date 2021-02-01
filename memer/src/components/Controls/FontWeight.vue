<template>
  <div id="font-weight">
    <span
      v-for="fontWeightClass in fontWeightClasses"
      :key="fontWeightClass"
      @click="click(fontWeightClass)"
      :class="
        fontWeightClass +
        ' ' +
        (fontWeightClass === $store.state.fontWeightClass ? 'selected' : '')
      "
    >
      {{ fontWeightClass.replace(/-weight$/, "") }}
    </span>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FontWeight extends Vue {
  fontWeightClasses = ["light-weight", "normal-weight", "bold-weight", "boldest-weight"];

  click(fontWeightClass: string) {
    this.$store.commit("setFontWeightClass", fontWeightClass);
  }
}
</script>

<style scoped lang="scss">
#font-weight {
  display: block;
  padding: 0 1rem;
  color: black;
  font-size: 2rem;
  margin: 1rem auto;
}
span {
  margin: 0 0.5rem;
}
</style>
