<template>
  <div
    id="home"
    :style="{
      'background-image': 'url(' + $store.state.image + ')',
      width: $store.state.width,
      height: $store.state.height,
    }"
  >
    <DropZone msg="Drop here" v-show="!$store.state.image" />
    <Text v-show="$store.state.image" />
    <Controls v-show="$store.state.image" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DropZone from "../components/DropZone.vue";
import Text from "../components/Text.vue";
import Controls from "../components/Controls.vue";

@Options({
  components: {
    DropZone,
    Text,
    Controls,
  },
})
export default class Home extends Vue {
  beforeMount() {
    const computed = getComputedStyle(document.documentElement);
    this.$store.commit("setDimensions", {
      width: parseInt(computed.getPropertyValue("--dropzone-width")),
      height: parseInt(computed.getPropertyValue("--dropzone-height")),
    });
  }
}
</script>

<style scoped>
#home {
  position: absolute;
  /* top: 50%;
  margin-top: calc(-0.5 * var(--dropzone-height)); */
  left: 50%;
  margin-left: calc(-0.5 * var(--dropzone-width));
  width: var(--dropzone-width);
  height: var(--dropzone-height);
}
</style>
