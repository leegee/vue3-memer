<template>
  <main ref="app">
    <nav id="nav">
      <router-link to="/" v-show="$store.state.image">Edit</router-link> |
      <router-link to="/settings" v-show="$store.state.image">Customise</router-link>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.courier {
  font-family: "Courier New", Courier, monospace;
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 1px;
}
.times {
  font-family: "Times New Roman", Times, serif;
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 1px;
}
.impact {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 3px;
}
.system {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 1px;
}
.comic {
  font-family: "Comic Sans MS", "Comic Sans MS", cursive;
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 1px;
}

.tf2 {
  font-family: TF2;
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 1px;
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
.boldest-weight {
  font-weight: boldest;
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
