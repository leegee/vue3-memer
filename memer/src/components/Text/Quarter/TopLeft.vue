<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class TopLeft extends Base {
  id = "top_left";
  defaultText = "Top Left";
}
</script>

<style>
#top_left {
  top: 1px;
  left: 1px;
  width: 50%;
  height: 50%;
}
</style>
