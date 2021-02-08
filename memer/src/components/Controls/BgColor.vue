<template>
  <fieldset>
    <legend>Background</legend>
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
