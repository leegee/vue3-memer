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
        'background-color': $store.state.bgColor,
        'background-size':
          $store.state.width + 'px ' + $store.state.height + 'px',
      }"
    >
      <DropZone
        msg="Drop or paste an image here"
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
export default class Home extends Vue {}
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
  border: 1pt solid var(--app-fg);
}
</style>
