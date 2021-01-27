<template>
  <div id="controls">Controls</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Controls extends Vue {}
</script>

<style scoped lang="scss">
#controls {
  position: absolute;
  top: calc(50% + (0.5 * var(--meme-height)));
  margin-top: 32pt;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24pt;
  background: black;
  color: white;
}
</style>
