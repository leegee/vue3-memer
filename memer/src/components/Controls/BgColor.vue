<template>
  <fieldset>
    <legend>Background</legend>

    <span
      v-show="$store.state.bgColor !== 'transparent'"
      id="transparent-bg"
      title="Transparent"
      @click="change('transparent')"
      >Make Trans</span
    >

    <span
      v-show="$store.state.bgColor === 'transparent'"
      id="transparent-bg-selected"
      >Is Trans</span
    >

    <input
      type="color"
      @change="change($event.target.value)"
      :value="$store.state.bgColor"
    />
  </fieldset>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class BgColor extends Vue {
  change(fontColor: string) {
    this.$store.commit("setBgColor", fontColor);
  }
}
</script>

<style scoped>
#transparent-bg {
  text-decoration: none;
  color: var(--app-bg);
}
#transparent-bg-selected {
  text-transform: lowercase;
  font-variant: small-caps;
}
</style>
