<template>
  <div class="page-background">
    <div class="header-box"></div>
    <div class="projects">
      <project-card v-for="(project, i) in projects" :key="i">
        <img :src="project.img" slot="card-image" class="card-image">
        <h1 slot="project-title">{{ project.title }}</h1>
        <a slot="link-button" :href="project.link.url" target="_blank">{{ project.link.title }}</a>
        <a slot="source-button" :href="project.source" target="_blank"><i class="fab fa-github"></i></a>
        <p class="card-content">{{ project.description }}</p>
      </project-card>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
import ProjectsJSON from "@/projects/index.json";

export default {
  data() {
    return {
      projects: ProjectsJSON
    };
  },
  components: {
    ProjectCard
  }
};
</script>

<style>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
}

.header-box {
  height: 60px;
}

.page-background {
  position: absolute;
  /* background: url("/forest2.jpg") repeat-y center;
  background-blend-mode: lighten;
  background-size: cover; */
  background: linear-gradient(165deg, #fefefe 60%, #d3d3d3);
  z-index: -1;
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  /* filter: opacity(0.8) saturate(1.1) contrast(1.2); */
}
</style>
