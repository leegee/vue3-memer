<template>
  <ul>
    <li
      v-for="(item, key) in layouts"
      :key="key"
      class="layout-choice"
      @click="click(key)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Layouts } from "@/components/Text.vue";

@Options({
  components: {
    Text,
  },
})
export default class LayoutChooser extends Vue {
  layouts = Layouts;
  click(chosenLayout: string) {
    this.$store.commit("setChosenLayout", chosenLayout);
    this.$router.push({ path: "/" });
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 4rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
}

li {
  opacity: 0.28;
  padding: 0.5rem;
  transition-property: opacity;
  transition-delay: 0s;
  transition-duration: 1s;
}

li:hover {
  transition: opacity 1s;
  opacity: 1;
}

.layout-choice {
  cursor: pointer;
}
</style>
