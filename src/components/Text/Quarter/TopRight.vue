<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class TopRight extends Base {
  id = "top_right";
  defaultText = "Top Right";
}
</script>

<style>
#top_right {
  top: 1px;
  left: 50%;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
