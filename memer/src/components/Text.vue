<template>
  <div id="text-layers" :class="$store.state.fontClass">
    <component v-for="layer in layers" :is="layer" :key="layer" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Bottom from "./Text/Bottom.vue";
import Top from "./Text/Topp.vue";

@Options({
  components: {
    Bottom,
    Top,
  },
})
export default class Text extends Vue {
  layers = [Top, Bottom];
}
</script>

<style scoped lang="scss">
#text-layers {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1pt solid black;
}
</style>
