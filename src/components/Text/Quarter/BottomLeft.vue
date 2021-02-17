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
  left: 0;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
