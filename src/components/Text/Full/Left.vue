<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class Left extends Base {
  id = "full_left";
  defaultText = "Left text";
}
</script>

<style>
#full_left {
  top: 0;
  left: 0;
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
