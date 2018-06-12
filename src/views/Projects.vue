<template>
  <div class="page-container">
    <div class="header-box"></div>
    <div class="projects">
      <project-card>
        <img src="@/assets/Spindelspel.png" slot="card-image" class="card-image">
        <div slot="project-title" class="card-title">
          <h1 class="project-title">Spindelspel</h1>
          <a class="play-link" href="https://trymunx.github.com/Spindelspel" target="_blank">PLAY</a>
          <a href="https://github.com/trymunx/Spindelspel" target="_blank" class="github-link"><i class="fab fa-github"></i></a>
        </div>
        <p class="card-content">A game written in <a href="https://p5js.org">p5.js</a>, a JavaScript port of Processing. The aim was to learn the p5js library by writing a game over a weekend. Most of the game was written over the course of two days, although the code isn't pretty. Making the spider assets was fun, but I never got around to making a player asset or adding a start page, which might have helped to explain the slightly quirky gameplay.</p>
      </project-card>
      <project-card>
        <img src="@/assets/Spindelspel.png" slot="card-image" class="card-image">
        <div slot="project-title" class="card-title">
          <h1 class="project-title">Spindelspel</h1>
          <a class="play-link" href="https://trymunx.github.com/Spindelspel" target="_blank">PLAY</a>
          <a href="https://github.com/trymunx/Spindelspel" target="_blank" class="github-link"><i class="fab fa-github"></i></a>
        </div>
        <p class="card-content">A game written in <a href="https://p5js.org">p5.js</a>, a JavaScript port of Processing. The aim was to learn the p5js library by writing a game over a weekend. Most of the game was written over the course of two days, although the code isn't pretty. Making the spider assets was fun, but I never got around to making a player asset or adding a start page, which might have helped to explain the slightly quirky gameplay.</p>
      </project-card>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  components: {
    ProjectCard
  }
};
</script>

<style>
.projects {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.header-box {
  height: 60px;
}

.card-image {
  max-width: 100%;
  height: auto;
}

.card-title {
  display: flex;
  align-items: center;
}

.project-title {
  font-size: 1.8em;
  padding: 14px 20px;
  margin-right: auto;
}

.play-link {
  padding: 8px 28px;

  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 1.2em;
  text-decoration: none;
  color: #ebf4eb;
  background: #4c7553;
  transition: all 0.35s ease;
}
.play-link:hover {
  background: #4f935b;
  box-shadow: 0 4px 8px 0 #0000001a, 0 6px 20px 0 #00000052;
}
.card-content {
  text-align: left;
  padding: 2px 14px 8px;
}

.page-container {
  background: #fafafa;
  min-height: 100vh;
}
.page-background {
  position: absolute;
  background: url("/forest2.jpg") no-repeat center fixed;
  background-size: cover;
  z-index: -1;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  filter: opacity(0.8) saturate(1.6) contrast(1.2);
}
.github-link {
  font-size: 2em;
  padding: 2px 10px;
  margin: 10px 18px;
  color: #2a3a2d;
  transition: color 0.35s ease;
}

.github-link:hover {
  color: #4c7553;
}
</style>
