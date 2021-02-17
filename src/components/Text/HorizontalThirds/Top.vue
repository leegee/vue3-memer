<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class HorizontalThirdsTop extends Base {
  id = "hor_3_top";
  defaultText = "Top";
}
</script>

<style>
#hor_3_top {
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
