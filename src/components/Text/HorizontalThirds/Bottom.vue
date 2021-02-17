<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class HorizontalThirdsBottom extends Base {
  id = "hor_3_bottom";
  defaultText = "Bottom";
}
</script>

<style>
#hor_3_bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
