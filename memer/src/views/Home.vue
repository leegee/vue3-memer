<template>
  <div id="trans-bg">
    <div
      id="home"
      :style="{
        'background-image': 'url(' + $store.state.image + ')',
        'background-color': $store.state.bgColor,
        width: $store.state.width + 'px',
        height: $store.state.height + 'px',
      }"
    >
      <DropZone msg="Drop an image here" v-show="!$store.state.image" />
      <Text v-show="$store.state.image" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DropZone from "@/components/DropZone.vue";
import Text from "@/components/Text.vue";

@Options({
  components: {
    DropZone,
    Text,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
#trans-bg {
  background: url("../assets/trans.jpg") center repeat;
}
#home {
  position: relative;
  left: 50%;
  margin-left: calc(-0.5 * var(--meme-width));
  width: var(--meme-width);
  height: var(--meme-height);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1pt solid var(--app-fg);
}
</style>
