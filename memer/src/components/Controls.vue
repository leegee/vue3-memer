<template>
  <div id="controls">
    <component v-for="control in controls" :is="control" :key="control" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Bottom from "./Controls/Bottom.vue";
import Top from "./Controls/Topp.vue";

@Options({
  props: {
    msg: String,
  },
  components: {
    Bottom,
    Top,
  },
})
export default class Controls extends Vue {
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
