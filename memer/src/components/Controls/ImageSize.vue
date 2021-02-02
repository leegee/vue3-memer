<template>
  <select id="image-size" @change="change($event.target.value)">
    <optgroup label="Image size"></optgroup>
    <option
      v-for="imageSize in imageSaveSizes"
      :key="imageSize"
      :class="imageSize"
      :selected="imageSize === $store.state.imageSize"
    >
      {{ imageSize }}
    </option>
  </select>
</template>

<script lang="ts">
/*

import { Vue } from "vue-class-component";
import { imageSaveSizes as _imageSaveSizes } from "./Save.vue";

export default class ImageSize extends Vue {
  imageSaveSizes = _imageSaveSizes;
  change(imageSize: string) {
    this.$store.commit("setImageSaveSize", imageSize);
  }
}
*/
</script>

<style scoped>
#image-size {
  display: block;
  padding: 0 1rem;
  color: black;
  font-size: 2rem;
  margin: 1rem auto;
}
</style>
