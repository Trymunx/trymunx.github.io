<template>
  <div id="app">
    <nav :class="`nav_${orientation}`">
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
    <div :class="`app-content_${orientation}`">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orientation: ""
    }
  },
  methods: {
    calculateOrientation() {
      return window.matchMedia("(orientation: landscape)").matches && (window.innerHeight <= 530)
        ? "landscape"
        : "portrait"
    }
  },
  mounted() {
    this.orientation = this.calculateOrientation();
    window.addEventListener("resize", () => this.orientation = this.calculateOrientation());
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
#app {
  font-family: "Ubuntu", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-content_landscape {
  width: calc(100vw - 58px);
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  position: absolute;
  left: 58px;
}

.app-content_portrait {
  height: calc(100vh - 58px);
  max-height: 100%;
  width: 100vw;
  max-width: 100%;
  position: absolute;
  top: 58px;
}

nav a {
  font-size: 1.6em;
  text-decoration: none;
  color: #263325b6;
  transition: color 0.2s ease;
  margin: 8px;
  padding: 6px;
}

nav a:hover {
  color: #3c7a298e;
  /* border-bottom: 2px solid #3c7a298e; */
}

nav a.router-link-active {
  color: #3c7a29;
}

.nav_portrait {
  width: 100vw;
  max-width: 100%;
  position: fixed;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  top: 0;
  z-index: 99;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05), 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.nav_landscape {
  height: 100vh;
  max-height: 100%;
  width: 58px;
  position: fixed;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  left: 0;
  z-index: 99;
  background-color: white;
  box-shadow: 4px 0px 8px rgba(0, 0, 0, 0.05), 4px 0px 20px rgba(0, 0, 0, 0.1);
}

.nav_landscape > a {
  transform: rotate(270deg);
}
</style>
