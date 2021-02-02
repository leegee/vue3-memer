<template>
  <ul>
    <li v-for="(item, key) in layouts" :key="key" @click="click(key)">
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
  font-size: 2rem;
}
li {
  padding: 1rem;
}
</style>
