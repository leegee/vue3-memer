<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class Left extends Base {
  id = "full_left";
  defaultText = "Left text";
}
</script>

<style>
#full_left {
  top: 1pt;
  left: 1pt;
  height: 100%;
  width: 33%;
}
</style>
