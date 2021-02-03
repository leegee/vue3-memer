<template>
  <fieldset id="fonts">
    <div
      v-for="fontClass in fontClasses"
      :key="fontClass"
      :class="fontClass + ' ' + (fontClass === $store.state.fontClass ? 'selected' : '')"
      @click="click(fontClass)"
    >
      {{ fontClass }}
    </div>
  </fieldset>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FontSelect extends Vue {
  fontClasses = ["impact", "tf2", "times", "courier", "comic", "system"];

  click(fontClass: string) {
    this.$store.commit("setFont", fontClass);
  }
}
</script>

<style scoped lang="scss">
#fonts {
  padding: 0 1rem;
  color: var(--app-fg);
  font-size: 32pt;
}

#fonts div {
  vertical-align: baseline;
  margin: 0 0.5rem;
  cursor: pointer;
}
</style>
