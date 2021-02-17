<template>
  <div>
    <main ref="app" v-show="loaded">
      <header>
        <h1 v-show="!$store.state.image">memification</h1>
        <nav id="nav" v-show="$store.state.image">
          <a
            class="icon options"
            v-show="$route.matched.some(({ name }) => name === 'Home')"
            @click="$store.commit('toggleModal')"
            >⚙</a
          >
          <router-link to="/" class="icon edit">🖉</router-link>
          <router-link to="/layouts" class="icon layouts">⬓</router-link>
          <router-link to="/new" class="icon new"></router-link>
          <router-link to="/save" class="icon save">⭳</router-link>
        </nav>
      </header>

      <router-view />
    </main>

    <Settings />
  </div>
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
  loaded = false;

  mounted() {
    const computed = window.getComputedStyle(this.$refs.app as Element);
    this.$store.commit("setDimensions", {
      width: parseInt(computed.getPropertyValue("--meme-width")),
      height: parseInt(computed.getPropertyValue("--meme-height")),
    });
    this.loaded = true;
  }
}
</script>

<style>
@font-face {
  font-family: "TF2";
  src: url("./assets/tf2build.ttf");
}

#app {
  overflow: auto;
  --meme-width: 500px;
  --meme-height: 500px;
  --app-bg: #2c3e50;
  --app-bg: #000;
  --app-fg: #fff;
  --app-nav-height: 3rem;
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
  min-height: var(--app-nav-height);
  max-height: var(--app-nav-height);
  background: var(--app-bg);
  font-size: 2rem;
  margin: 1.3rem 0;
  display: flex;
  justify-content: center;
  align-items: space-between;
}
#nav a {
  text-decoration: none;
  display: inline-block;
  position: relative;
}
#nav a.router-link-exact-active,
#nav a.router-link-active {
  font-weight: bold;
  opacity: 0.9;
}

.icon {
  cursor: pointer;
  display: inline-block;
  font-weight: bolder;
  min-width: 1.2em;
  min-height: 1em;
  margin-right: 1rem;
  color: var(--app-fg);
  background-color: var(--app-fg);
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  opacity: 0.6;
}
.icon:hover,
.icon:active {
  opacity: 1;
}
.icon.new {
  mask-image: url("./assets/icons/new.svg");
}
.icon.save {
  mask-image: url("./assets/icons/save.svg");
}
.icon.options {
  mask-image: url("./assets/icons/options.svg");
}
.icon.layouts {
  mask-image: url("./assets/icons/layouts.svg");
}
.icon.edit {
  mask-image: url("./assets/icons/edit.svg");
}

#app header h1 {
  padding: 0;
  color: var(--app-fg);
  font-weight: 100;
  font-size: 12pt;
  margin: 2em 0;
  letter-spacing: 1ch;
  text-transform: lowercase;
  font-variant: small-caps;
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

.lighter-weight {
  font-weight: lighter;
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
