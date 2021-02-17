<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class TopLeft extends Base {
  id = "top_left";
  defaultText = "Top Left";
}
</script>

<style>
#top_left {
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
