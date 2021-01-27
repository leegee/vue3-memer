<template>
  <div class="home">
    <DropZone msg="Drop here" />
    <Controls />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DropZone from "../components/DropZone.vue";
import Controls from "../components/Controls.vue";

@Options({
  components: {
    DropZone,
    Controls,
  },
})
export default class Home extends Vue {}
</script>
