<template>
  <div id="fonts">
    <div
      v-for="fontClass in fontClasses"
      :key="fontClass"
      :class="fontClass"
      @click="click(fontClass)"
    >
      {{ fontClass }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FontSelect extends Vue {
  fontClasses = ["impact", "times", "courier", "system"];

  click(fontClass: string) {
    this.$store.commit("setFont", fontClass);
  }
}
</script>

<style scoped lang="scss">
#fonts {
  padding: 0 1rem;
  color: black;
  font-size: 32pt;
}

#fonts div {
  vertical-align: baseline;
  margin: 0 0.5rem;
  cursor: pointer;
}
</style>
