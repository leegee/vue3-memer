<template>
  <div
    id="drop-zone"
    :style="{
      'background-image': 'url(' + $store.state.image + ')',
      width: $store.state.width + 'px',
      height: $store.state.height + 'px',
    }"
  >
    <DropZone msg="Drop here" v-show="!$store.state.image" />
    <Text v-show="$store.state.image" />
  </div>

  <button id="show-modal" v-show="$store.state.image" @click="showModal = true">
    Customise
  </button>

  <div v-show="$store.state.image && showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <Settings />
            <button id="close-modal" @click="showModal = false">OK</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DropZone from "@/components/DropZone.vue";
import Text from "@/components/Text.vue";
import Settings from "@/components/Settings.vue";

@Options({
  components: {
    DropZone,
    Text,
    Settings,
  },
})
export default class Home extends Vue {
  showModal = false;
}
</script>

<style scoped>
#drop-zone {
  position: relative;
  left: 50%;
  margin: 1rem;
  margin-left: calc(-0.5 * var(--meme-width));
  width: var(--meme-width);
  height: var(--meme-height);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1pt solid var(--app-fg);
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
