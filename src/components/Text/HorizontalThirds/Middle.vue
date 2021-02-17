<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class HorizontalThirdsMiddle extends Base {
  id = "hor_3_mid";
  defaultText = "Middle";
}
</script>

<style>
#hor_3_mid {
  top: calc(100% / 3);
  left: 0;
  width: 100%;
  height: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
