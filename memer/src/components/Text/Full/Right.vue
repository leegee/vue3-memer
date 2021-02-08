<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class Right extends Base {
  id = "full_right";
  defaultText = "Right text";
}
</script>

<style>
#full_right {
  top: 1pt;
  right: 1pt;
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
