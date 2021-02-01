<template>
  <div id="settings">
    <FontSelect />
    <FontColor />
    <FontSize />
    <FontWeight />
    <ImageSize />
    <Save />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Save from "../components/Controls/Save.vue";
import FontSelect from "../components/Controls/FontSelect.vue";
import FontSize from "../components/Controls/FontSize.vue";
import FontColor from "../components/Controls/FontColor.vue";
import FontWeight from "../components/Controls/FontWeight.vue";
import ImageSize from "../components/Controls/ImageSize.vue";

@Options({
  components: {
    FontSelect,
    FontSize,
    FontWeight,
    FontColor,
    ImageSize,
    Save,
  },
})
export default class Settings extends Vue {}
</script>

<style>
#settings {
  width: 100%;
}
.selected {
  background-color: yellow;
}
</style>
