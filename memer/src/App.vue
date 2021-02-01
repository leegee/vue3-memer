<template>
  <div id="nav">
    <router-link to="/" v-show="$store.state.image">Meme</router-link> |
    <router-link to="/settings" v-show="$store.state.image">Settings</router-link>
  </div>
  <router-view />
</template>

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
  text-stroke-color: white;
  -webkit-text-stroke-color: white;
  text-stroke-width: 1px;
  -webkit-text-stroke-width: 1px;
}
.times {
  font-family: "Times New Roman", Times, serif;
  text-stroke-color: white;
  -webkit-text-stroke-color: white;
  text-stroke-width: 1px;
  -webkit-text-stroke-width: 1px;
}
.impact {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-stroke-color: white;
  -webkit-text-stroke-color: white;
  text-stroke-width: 3px;
  -webkit-text-stroke-width: 3px;
}
.system {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-stroke-color: white;
  -webkit-text-stroke-color: white;
  text-stroke-width: 1px;
  -webkit-text-stroke-width: 1px;
}
.comic {
  font-family: "Comic Sans MS", "Comic Sans MS", cursive;
  text-stroke-color: white;
  -webkit-text-stroke-color: white;
  text-stroke-width: 1px;
  -webkit-text-stroke-width: 1px;
}

.tf2 {
  font-family: TF2;
  text-stroke-color: white;
  -webkit-text-stroke-color: white;
  text-stroke-width: 1px;
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
