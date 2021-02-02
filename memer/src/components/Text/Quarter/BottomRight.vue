<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class BottomRight extends Base {
  id = "bottom_right";
  defaultText = "Bottom Right";
}
</script>

<style>
#bottom_right {
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
}
</style>
