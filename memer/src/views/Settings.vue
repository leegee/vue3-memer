<template>
  <div id="settings">
    <FontSelect />
    <FontColor />
    <FontStroke />
    <FontSize />
    <FontWeight />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import FontSelect from "../components/Controls/FontSelect.vue";
import FontSize from "../components/Controls/FontSize.vue";
import FontColor from "../components/Controls/FontColor.vue";
import FontWeight from "../components/Controls/FontWeight.vue";
import FontStroke from "../components/Controls/FontStroke.vue";

@Options({
  components: {
    FontSelect,
    FontSize,
    FontWeight,
    FontColor,
    FontStroke,
  },
})
export default class Settings extends Vue {}
</script>

<style scoped>
#settings {
  width: 100%;
}
.selected {
  background-color: yellow;
}

fieldset {
  display: block;
  padding: 1rem;
  color: black;
  margin: 1rem auto;
}
</style>
