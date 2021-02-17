  <template>
  <aside v-show="$store.state.image && $store.state.showModal">
    <transition name="modal">
      <div class="inline-settings-container">
        <!-- <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container"> -->
        <div id="settings">
          <CanvasColor />
          <FontSelect />
          <FontColor />
          <BgColor />
          <FontStroke />
          <FontSize />
          <FontWeight />
        </div>

        <button id="close-modal" @click="$store.commit('toggleModal', false)">
          OK
        </button>
        <!-- </div>
          </div>
        </div> -->
      </div>
    </transition>
  </aside>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import CanvasColor from "../components/Controls/CanvasColor.vue";
import BgColor from "../components/Controls/BgColor.vue";
import FontColor from "../components/Controls/FontColor.vue";
import FontSelect from "../components/Controls/FontSelect.vue";
import FontSize from "../components/Controls/FontSize.vue";
import FontWeight from "../components/Controls/FontWeight.vue";
import FontStroke from "../components/Controls/FontStroke.vue";

@Options({
  components: {
    CanvasColor,
    BgColor,
    FontSelect,
    FontSize,
    FontWeight,
    FontColor,
    FontStroke,
  },
})
export default class Settings extends Vue {}
</script>

<style>
#settings {
  width: 100%;
}

fieldset {
  display: block;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 0.3rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 90%;
}
fieldset legend {
  border: none;
  float: left;
}

#close-modal {
  cursor: pointer;
  --size: 3rem;
  min-width: var(--size);
  min-height: var(--size);
  background: var(--app-bg);
  color: var(--app-fg);
  border: 1pt solid var(--app-fg);
  border-radius: 50%;
  z-index: 9999;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  width: 100vw;
  height: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);
  background-color: transparent;
  transition: opacity 0.3s ease;
  /* display: table; */
}

@media (orientation: portrait) {
  .modal-mask {
    /* top: var(--app-nav-height); */
    /* height: calc(100vh - var(--app-nav-height)); */
  }
}

.modal-wrapper {
  bottom: 0;
  position: fixed;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;
  justify-items: center;
  height: 100%;
  width: 100%;
}

.modal-container {
  min-height: 300px;
  max-height: 300px;
  width: 300px;
  margin: 0 auto;
  padding: 1rem;
  background-color: var(--app-fg);
  color: var(--app-bg);
  border-radius: 4pt;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  overflow-x: hidden;
  overflow-y: auto;
}

@media (orientation: portrait) {
  .modal-container {
    /* height: auto;
    max-height: 100%; */
  }
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
