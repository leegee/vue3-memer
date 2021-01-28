<template>
  <div id="controls">
    <component v-for="control in controls" :is="control" :key="control" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Bottom from "./Text/Bottom.vue";
import Top from "./Text/Topp.vue";

@Options({
  props: {
    msg: String,
  },
  components: {
    Bottom,
    Top,
  },
})
export default class Text extends Vue {
  controls = [Top, Bottom];
}
</script>

<style scoped lang="scss">
#controls {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
