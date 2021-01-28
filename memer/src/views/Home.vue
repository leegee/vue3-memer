<template>
  <div id="home">
    <DropZone msg="Drop here" />
    <Controls />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DropZone from "../components/DropZone.vue";
import Controls from "../components/Controls.vue";

@Options({
  components: {
    DropZone,
    Controls,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
#home {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: calc(-0.5 * var(--meme-height));
  margin-left: calc(-0.5 * var(--meme-height));
  width: var(--meme-width);
  height: var(--meme-height);
}
</style>
