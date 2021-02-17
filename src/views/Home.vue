<template>
  <div
    id="trans-bg"
    :style="{
      width: $store.state.width + 'px',
      height: $store.state.height + 'px',
      left: (-1 * $store.state.width) / 2 + 'px',
    }"
  >
    <div
      id="home"
      :style="{
        'background-image': 'url(' + $store.state.image + ')',
        'background-color': $store.state.canvasColor,
        'background-size':
          $store.state.width + 'px ' + $store.state.height + 'px',
      }"
    >
      <DropZone
        msg="Drop, paste,or choose an image here"
        v-show="!$store.state.image"
      />
      <Text v-show="$store.state.image" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DropZone from "@/components/DropZone.vue";
import Text from "@/components/Text.vue";

@Options({
  components: {
    DropZone,
    Text,
  },
})
export default class Home extends Vue {
  mounted() {
    let width;
    let height;

    if (window.screen.availWidth < 500 || window.screen.availHeight < 500) {
      if (window.screen.availWidth < window.screen.availHeight) {
        width = height = window.screen.availWidth;
      } else {
        height = width = window.screen.availHeight;
      }
      this.$store.commit("setDimensions", { width, height });
    }
  }
}
</script>

<style scoped>
#trans-bg {
  background: url("../assets/trans.jpg") center repeat;
  position: relative;
  margin-left: 50%;
}
#home {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
}

@media (orientation: portrait) and (max-width: 500px) {
  #home {
    max-width: 100%;
  }
}
</style>
