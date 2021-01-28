<script lang="ts">
import Control from "@/components/Control.vue";

export default class Top extends Control {
  name = "Top";
  text = "Top text";
}
</script>

<style>
#overlay_top {
  top: 1pt;
  left: 1pt;
  height: 1em;
}
</style>
