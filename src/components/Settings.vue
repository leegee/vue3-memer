<template>
  <div id="settings">
    <CanvasColor />
    <FontSelect />
    <FontColor />
    <BgColor />
    <FontStroke />
    <FontSize />
    <FontWeight />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import CanvasColor from "../components/Controls/CanvasColor.vue";
import BgColor from "../components/Controls/BgColor.vue";
import FontColor from "../components/Controls/FontColor.vue";
import FontSelect from "../components/Controls/FontSelect.vue";
import FontSize from "../components/Controls/FontSize.vue";
import FontWeight from "../components/Controls/FontWeight.vue";
import FontStroke from "../components/Controls/FontStroke.vue";

@Options({
  components: {
    CanvasColor,
    BgColor,
    FontSelect,
    FontSize,
    FontWeight,
    FontColor,
    FontStroke,
  },
})
export default class Settings extends Vue {}
</script>

<style>
#settings {
  width: 100%;
}

fieldset {
  display: block;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 0.3rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 90%;
}
fieldset legend {
  border: none;
  float: left;
}
</style>
