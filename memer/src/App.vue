<template>
  <div id="nav">
    <router-link to="/" v-show="$store.state.image">Meme</router-link> |
    <router-link to="/settings" v-show="$store.state.image">Settings</router-link>
  </div>
  <router-view />
</template>

<style>
@font-face {
  font-family: "TF2"; /*a name to be used later*/
  src: url("./assets/tf2build.ttf"); /*URL to font*/
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
  font-weight: bold;
}
.times {
  font-family: "Times New Roman", Times, serif;
  text-stroke-color: white;
  -webkit-text-stroke-color: white;
  text-stroke-width: 1px;
  -webkit-text-stroke-width: 1px;
  font-weight: bold;
}
.impact {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-stroke-color: white;
  -webkit-text-stroke-color: white;
  text-stroke-width: 3px;
  -webkit-text-stroke-width: 3px;
  font-weight: bold;
}
.system {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-stroke-color: white;
  -webkit-text-stroke-color: white;
  text-stroke-width: 1px;
  -webkit-text-stroke-width: 1px;
  font-weight: bold;
}

.tf2 {
  font-family: TF2;
  text-stroke-color: white;
  -webkit-text-stroke-color: white;
  text-stroke-width: 1px;
  -webkit-text-stroke-width: 1px;
  font-weight: bold;
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
