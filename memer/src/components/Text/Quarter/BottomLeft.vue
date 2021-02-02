<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class BottomLeft extends Base {
  id = "bottom_left";
  defaultText = "Bottom Left text";
}
</script>

<style>
#bottom_left {
  top: 50%;
  left: 1px;
  width: 50%;
  height: 50%;
}
</style>
