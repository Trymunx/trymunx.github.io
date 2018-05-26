<template>
  <div>
    <div class="header-box"></div>
    <div class="projects">
      <project-card>
      <!-- <project-card class="project-card"> -->
        <img src="@/assets/Spindelspel.png" slot="card-image" class="card-image">
        <h1 slot="project-title" class="project-title">Spindelspel</h1>
        <p class="card-content">This is a description of the game</p>
        <!-- <p slot="card-content" class="card-content">This is a description of the game</p> -->
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
}

.project-card {
  max-width: 600px;
  padding-bottom: 5px;
}

.header-box {
  height: 60px;
}

.card-image {
  max-width: 100%;
  height: auto;
}

.project-title {
  font-size: 1.8em;
  text-align: center;
  padding: 10px;
}
.card-content {
  text-align: left;
  padding: 10px;
}
</style>
