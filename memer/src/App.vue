<template>
  <main ref="app">
    <nav id="nav">
      <div v-show="$store.state.image">
        <router-link to="/" class="icon">🖉</router-link>
        <button
          id="show-customize"
          v-show="$store.state.image"
          @click="showModal = true"
        >
          Customise
        </button>

        <router-link to="/layouts" class="icon">⬓</router-link>
        <router-link to="/save" class="save icon">⭳</router-link>
      </div>
    </nav>
    <router-view />
  </main>

  <aside v-show="$store.state.image && showModal">
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
  </aside>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Settings from "@/components/Settings.vue";

@Options({
  components: {
    Settings,
  },
})
export default class App extends Vue {
  showModal = false;
  mounted() {
    const computed = window.getComputedStyle(this.$refs.app as Element);
    this.$store.commit("setDimensions", {
      width: parseInt(computed.getPropertyValue("--meme-width")),
      height: parseInt(computed.getPropertyValue("--meme-height")),
    });
  }
}
</script>

<style>
@font-face {
  font-family: "TF2";
  src: url("./assets/tf2build.ttf");
}

#app {
  --meme-width: 500px;
  --meme-height: 500px;
  --app-bg: #2c3e50;
  --app-fg: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--app-fg);
  background-color: var(--app-bg);
  width: 100%;
  height: 100%;
}

#nav {
  background: var(--app-fg);
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: space-between;
  margin-bottom: 1rem;
}
#nav a {
  text-decoration: none;
  color: var(--app-bg);
  opacity: 0.4;
}
#nav a.router-link-exact-active {
  font-weight: bold;
  opacity: 1;
}
#nav .icon {
  display: inline-block;
  font-weight: bolder;
  min-width: 1em;
  min-height: 1em;
  margin-right: 1rem;
}
.icon.save {
  -webkit-transform: scale(2, 1);
  -moz-transform: scale(2, 1);
  -ms-transform: scale(2, 1);
  -o-transform: scale(2, 1);
  transform: scale(2, 1);
  margin-left: 1rem;
}

#close-modal {
  --size: 3rem;
  position: absolute;
  right: calc(-0.5 * var(--size));
  top: calc(-0.5 * var(--size));
  background: black;
  color: white;
  border: 1pt solid white;
  border-radius: 50%;
  min-width: var(--size);
  min-height: var(--size);
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
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: var(--app-fg);
  color: var(--app-bg);
  border-radius: 4pt;
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

#show-customize {
  margin: 1rem;
}

.courier {
  font-family: "Courier New", Courier, monospace;
}
.times {
  font-family: "Times New Roman", Times, serif;
}
.impact {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.system {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.comic {
  font-family: "Comic Sans MS", "Comic Sans MS", cursive;
}

.tf2 {
  font-family: TF2;
}

.smallest {
  font-size: 14pt;
}
.small {
  font-size: 18pt;
}
.normal {
  font-size: 24pt;
}
.medium {
  font-size: 32pt;
}
.large {
  font-size: 38pt;
}
.larger {
  font-size: 48pt;
}
.huge {
  font-size: 64pt;
}

.light-weight {
  font-weight: light;
}
.normal-weight {
  font-weight: normal;
}
.bold-weight {
  font-weight: bold;
}
.bolder-weight {
  font-weight: bolder;
}
</style>
