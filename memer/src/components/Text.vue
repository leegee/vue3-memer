<template>
  <div
    id="text-layers"
    :class="$store.state.fontClass + ' ' + $store.state.fontSizeClass"
    :style="{
      color: $store.state.fontColor,
    }"
  >
    <component v-for="layer in chosenLayers" :is="layer" :key="layer" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Bottom from "./Text/Full/Bottom.vue";
import Top from "./Text/Full/Top.vue";
import Left from "./Text/Full/Left.vue";
import Right from "./Text/Full/Right.vue";

import TopLeft from "./Text/Quarter/TopLeft.vue";
import TopRight from "./Text/Quarter/TopRight.vue";
import BottomLeft from "./Text/Quarter/BottomLeft.vue";
import BottomRight from "./Text/Quarter/BottomRight.vue";

const Layouts = [
  [Left, Right],
  [TopLeft, TopRight, BottomLeft, BottomRight],
  [Top, Bottom],
];

@Options({
  components: {
    Bottom,
    Top,
    Left,
    Right,
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight,
  },
})
export default class Text extends Vue {
  chosenLayers = Layouts[0];
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
