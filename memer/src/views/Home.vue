<template>
  <div
    id="home"
    :style="{
      'background-image': 'url(' + $store.state.image + ')',
      width: $store.state.width,
      height: $store.state.height,
    }"
  >
    <DropZone msg="Drop here" v-show="!$store.state.image" />
    <Text v-show="$store.state.image" />
    <Save />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DropZone from "../components/DropZone.vue";
import Text from "../components/Text.vue";
import Save from "../components/Save.vue";

@Options({
  components: {
    DropZone,
    Text,
    Save,
  },
})
export default class Home extends Vue {
  width = "500px";
  height = "500px";

  beforeMount() {
    this.$store.commit("setDimensions", {
      width: this.width,
      height: this.height,
    });
  }
}
</script>

<style scoped>
#home {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: calc(-0.5 * var(--meme-height));
  margin-left: calc(-0.5 * var(--meme-height));
  width: var(--meme-width);
  height: var(--meme-height);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1pt solid black;
  filter: drop-shadow(0pt 4pt 4pt #0009);
}
</style>
