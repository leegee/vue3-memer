<template>
  <div
    id="text-layers"
    :class="$store.state.fontClass + ' ' + $store.state.fontSizeClass"
  >
    <component v-for="layer in layers" :is="layer" :key="layer" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Bottom from "./Text/Bottom.vue";
import Top from "./Text/Topp.vue";
// import Left from "./Text/Left.vue";
// import Right from "./Text/Right.vue";

@Options({
  components: {
    Bottom,
    Top,
    // Left,
    // Right,
  },
})
export default class Text extends Vue {
  layers = [Top, Bottom];
  // layers = [Left, Right];
}
</script>

<style scoped lang="scss">
#text-layers {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
