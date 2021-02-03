<template>
  <main ref="app">
    <nav id="nav">
      <div v-show="$store.state.image">
        <router-link to="/">Edit</router-link> |
        <router-link to="/layouts">Layouts</router-link> |
        <router-link to="/settings">Customise</router-link> |
        <router-link to="/save">Save</router-link>
      </div>
    </nav>
    <router-view />
  </main>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
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
  --app-fg: #2c3e50;
  --app-bg: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--app-fg);
  background-color: var(--app-bg);
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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

#nav {
  padding: 30px;
}
#nav a {
  text-decoration: none;
  color: navy;
}
#nav a.router-link-exact-active {
  font-weight: bold;
  color: blue;
}
</style>
