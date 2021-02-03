<template>
  <div
    id="text-layers"
    :class="$store.state.fontClass + ' ' + $store.state.fontSizeClass"
    :style="{
      color: $store.state.fontColor,
      '-webkit-text-stroke-color': $store.state.strokeColor,
      '-webkit-text-stroke-width': $store.state.strokeWidth,
      'line-height': $store.state.lineHeight,
    }"
  >
    <component v-for="layer in chosenLayoutComponents" :is="layer" :key="layer" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Bottom from "./Text/Full/Bottom.vue";
import Top from "./Text/Full/Top.vue";
import Left from "./Text/Full/Left.vue";
import Right from "./Text/Full/Right.vue";
import Whole from "./Text/Whole.vue";
import TopLeft from "./Text/Quarter/TopLeft.vue";
import TopRight from "./Text/Quarter/TopRight.vue";
import BottomLeft from "./Text/Quarter/BottomLeft.vue";
import BottomRight from "./Text/Quarter/BottomRight.vue";
import HorizontalThirdsTop from "./Text/HorizontalThirds/Top.vue";
import HorizontalThirdsMiddle from "./Text/HorizontalThirds/Middle.vue";
import HorizontalThirdsBottom from "./Text/HorizontalThirds/Bottom.vue";

import HorizontalQuarters1 from "./Text/HorizontalQuarters/1.vue";
import HorizontalQuarters2 from "./Text/HorizontalQuarters/2.vue";
import HorizontalQuarters3 from "./Text/HorizontalQuarters/3.vue";
import HorizontalQuarters4 from "./Text/HorizontalQuarters/4.vue";

interface LayoutOption {
  // eslint-disable-next-line
  components: any[]; // What type is a Vue component
  label: string;
}

export const Layouts: { [key: string]: LayoutOption } = {
  topBottom: {
    label: "Top and Bottom",
    components: [Top, Bottom],
  },
  quarters: {
    label: "Four corners",
    components: [TopLeft, TopRight, BottomLeft, BottomRight],
  },
  leftRight: {
    label: "Left and right",
    components: [Left, Right],
  },
  whole: {
    label: "Whole",
    components: [Whole],
  },
  horizontalThirds: {
    label: "Horizontal thirds",
    components: [HorizontalThirdsTop, HorizontalThirdsMiddle, HorizontalThirdsBottom],
  },
  horizontalQuarters: {
    label: "Horizontal quarters",
    components: [
      HorizontalQuarters1,
      HorizontalQuarters2,
      HorizontalQuarters3,
      HorizontalQuarters4,
    ],
  },
};

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
    Whole,
    HorizontalThirdsTop,
    HorizontalThirdsMiddle,
    HorizontalThirdsBottom,
    HorizontalQuarters1,
    HorizontalQuarters2,
    HorizontalQuarters3,
    HorizontalQuarters4,
  },
})
export default class Text extends Vue {
  chosenLayoutComponents = Layouts[Object.keys(Layouts)[0]].components;

  created() {
    this.chosenLayoutComponents = Layouts[this.$store.state.chosenLayout].components;
  }
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
