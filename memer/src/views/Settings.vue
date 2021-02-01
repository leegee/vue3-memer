<template>
  <div id="settings">
    <FontSelect />
    <FontSize />
    <Save />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Save from "../components/Controls/Save.vue";
import FontSelect from "../components/Controls/FontSelect.vue";
import FontSize from "../components/Controls/FontSize.vue";

@Options({
  components: {
    FontSelect,
    FontSize,
    Save,
  },
})
export default class Settings extends Vue {}
</script>

<style scoped lang="scss">
#settings {
  width: 100%;
}
</style>
