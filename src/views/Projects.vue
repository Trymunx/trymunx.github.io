<template>
  <div class="page-background">
    <div class="projects">
      <div>
        <div class="project-container">
          <span class="project-title">
            <h2>Spindelspel</h2>
            <safe-anchor
              :href="'https://trymunx.github.io/Spindelspel'"
              class="button play-button"
            >Play</safe-anchor>
            <safe-anchor
              :href="'https://github.com/trymunx/Spindelspel'"
              class="button source-button"
            >
              <i class="fab fa-github"></i> Source
            </safe-anchor>
          </span>
          <p>
            A top down swarm game created in p5js in a weekend. You control a character with
            WASD keys, and draw and fire arrows at spiders as they converge on you.
          </p>
        </div>
        <div class="project-container">
          <span class="project-title">
            <h2>Dragon Slayer</h2>
            <safe-anchor
              :href="'https://trymunx.github.io/dragon-slayer'"
              class="button play-button"
            >Play</safe-anchor>
            <safe-anchor
              :href="'https://github.com/trymunx/dragon-slayer'"
              class="button source-button"
            >
              <i class="fab fa-github"></i> Source
            </safe-anchor>
          </span>
          <p>
            A text based RPG, which is still very much a work in progress. The main game is a top
            down map on which each creature is depicted by an ASCII character.
          </p>
        </div>
        <div class="project-container">
          <span class="project-title">
            <h2>Metric Clock</h2>
            <safe-anchor
              :href="'https://trymunx.github.io/metric-clock'"
              class="button view-button"
            >View</safe-anchor>
            <safe-anchor
              :href="'https://github.com/trymunx/metric-clock'"
              class="button source-button"
            >
              <i class="fab fa-github"></i> Source
            </safe-anchor>
          </span>
          <p>
            A page showing the current time in UTC and the metric equivalent. Metric time splits the
            day into 10 hours, each with 100 minutes of 100 seconds.
          </p>
        </div>
        <div class="project-container">
          <span class="project-title">
            <h2>Twodo App</h2>
            <safe-anchor
              :href="'https://twodo-app.github.io/twodo-app/#/'"
              class="button view-button"
            >View</safe-anchor>
            <safe-anchor :href="'https://github.com/twodo-app/'" class="button source-button">
              <i class="fab fa-github"></i> Source
            </safe-anchor>
          </span>
          <p>
            A simple to-do list app written in VueJS with a node backend hosted on Heroku. You can
            add and remove todos, and save your user ID as a cookie to return to them without
            needing to sign in (although all todos are cleared after a short interval).
            This project was made together with
            <safe-anchor :href="'https://pd-andy.github.io/'" class="name-tag-link">@pd-andy</safe-anchor>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SafeAnchor from "@/components/SafeAnchor";

export default {
  components: {
    SafeAnchor
  }
};
</script>

<style scoped>
.button {
  flex: 0 0 auto;
  font-size: 1.1em;
  padding: 6px 15px;
  text-decoration: none;
}

.play-button {
  background-color: #42693f;
  color: white;
}
.play-button:hover {
  background-color: #245c1d;
}

.source-button {
  background-color: #d3d3d3;
  color: #272727;
}
.source-button:hover {
  background-color: #c0c0c0;
}

.view-button {
  background-color: #385cc7;
  color: white;
}
.view-button:hover {
  background-color: #4a6dd8;
}

.projects {
  flex: 0 1 auto;
  font-family: "Roboto", sans-serif;
  margin: 20px;
  max-width: 500px;
  text-align: left;
}

.project-container {
  margin-bottom: 20px;
}

.project-title {
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 10px 0 18px;
}

.project-title h2 {
  color: #494949;
  font-size: 24px;
  margin-right: auto;
}

.page-background {
  background: linear-gradient(165deg, #fefefe 60%, #d3d3d3);
  display: flex;
  justify-content: center;
  max-width: 100%;
  min-height: calc(100vh - 58px);
  overflow-x: hidden;
  width: 100vw;
}

.name-tag-link {
  color: #385cc7;
  font-size: 1.1rem;
  font-weight: bold;
  white-space: nowrap;
}
</style>
