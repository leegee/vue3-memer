<template>
  <div id="fonts">
    <span
      v-for="fontClass in fontClasses"
      :key="fontClass"
      :class="fontClass"
      @click="click(fontClass)"
    >
      {{ fontClass }}
    </span>
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
  overflow: auto;
  padding: 0 1rem;
  color: black;
  font-size: 48pt;
}

#fonts span {
  vertical-align: baseline;
  margin: 0 0.5rem;
}
</style>
