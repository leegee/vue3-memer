<template>
  <div id="fonts">
    <div v-for="font in fonts" :key="font">{{ font }}</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FontSelect extends Vue {
  fonts = ["one", "two"];
}
</script>

<style scoped lang="scss">
#fonts {
}
</style>
