<template>
  <div id="controls">
    <FontSelect />
    <Save />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Save from "../components/Controls/Save.vue";
import FontSelect from "../components/Controls/FontSelect.vue";

@Options({
  components: {
    FontSelect,
    Save,
  },
})
export default class Controls extends Vue {}
</script>

<style scoped lang="scss">
#controls {
  position: absolute;
  width: var(--dropzone-width);
  top: calc(var(--dropzone-height) + 2em);
}
</style>
