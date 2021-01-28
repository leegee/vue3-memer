<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class Bottom extends Base {
  name = "Bottom";
  text = "Bottom text";
}
</script>

<style>
#control_bottom {
  top: calc(2em + 50% + (0.5 * var(--meme-height)));
}
#overlay_bottom {
  top: unset;
  bottom: 0;
  left: 1pt;
  min-height: 1em;
}
</style>
