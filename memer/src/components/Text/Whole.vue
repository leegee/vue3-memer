<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class Whole extends Base {
  id = "whole";
  defaultText = "Covering the whole image";
}
</script>

<style>
#whole {
  top: 1px;
  left: 1px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
