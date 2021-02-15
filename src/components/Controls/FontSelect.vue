<template>
  <fieldset id="fonts">
    <select
      id="font-size"
      @change="change($event.target.value)"
      :class="$store.state.fontClass"
    >
      <option
        v-for="fontClass in fontClasses"
        :key="fontClass"
        :class="'option-font-class ' + fontClass"
        :selected="fontClass === $store.state.fontClass"
      >
        {{ fontClass }}
      </option>
    </select>
  </fieldset>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FontSelect extends Vue {
  fontClasses = ["impact", "tf2", "times", "courier", "comic", "system"];

  change(fontClass: string) {
    this.$store.commit("setFont", fontClass);
  }
}
</script>

<style scoped lang="scss">
#fonts {
  color: var(--app-fg);
}

#font-size {
  width: 100%;
  font-size: 2rem;
}
</style>
