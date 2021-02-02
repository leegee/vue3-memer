<script lang="ts">
import Base from "@/components/Text/Base.vue";

export default class Bottom extends Base {
  id = "full_bottom";
  defaultText = "Bottom text";
}
</script>

<style>
#full_bottom {
  bottom: 0;
  left: 1pt;
  min-height: 1em;
  width: 100%;
}
</style>
