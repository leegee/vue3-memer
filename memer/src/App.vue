<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  --dropzone-width: 500px;
  --dropzone-height: 500px;

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
