<template>
  <div id="app">
    <nav class="router">
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-size: 1.6em;
  text-decoration: none;
  color: #263325b6;
  transition: all 0.2s ease;
  margin: 8px;
  padding: 6px;
}

nav a:hover {
  color: #3c7a298e;
  border-bottom: 2px solid #3c7a298e;
}

nav a.router-link-exact-active {
  color: #3c7a29;
  border: 2px;
  border-bottom: 2px solid #3c7a29;
}

.router {
  width: 100vw;
  max-width: 100%;
  position: absolute;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  top: 0;
}
</style>
