<template>
  <div class="page-background" @click="setActive('')">
    <div class="projects">
      <project-card 
        v-for="(project, i) in projects" 
        :key="i" 
        :focused="active === i"
        @click.native.stop>
        <img :src="project.img" slot="card-image" class="card-image" @click.stop="toggleActiveCard(project.title)">
        <!-- <img :src="project.img" slot="card-image" class="card-image" @click.stop="active === -1 ? setActive(project.title) : setActive('')"> -->
        <h1 slot="project-title">{{ project.title }}</h1>
        <a slot="link-button" :href="project.link.url" target="_blank">{{ project.link.title }}</a>
        <a slot="source-button" :href="project.source" target="_blank"><i class="fab fa-github"></i></a>
        <p slot="description" @click.stop="setActive(project.title)">{{ project.description }}</p>
        <div slot="writeup"
          v-for="(element, i) in project.post"
          :key="i"
          v-html="`<${element.element}>${element.content}</${element.element}>`"></div>
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
      projects: ProjectsJSON,
      active: -1
    };
  },
  components: {
    ProjectCard
  },
  methods: {
    toggleActiveCard(title) {
      // find if the title clicked on is the current title. If so, setActive(""), otherwise setActive(index)
      let isFullscreen = this.$route.params.post
        ? title.toLowerCase() === this.$route.params.post.toLowerCase()
        : false;
      // let indexOfTitle = this.projects.findIndex(project => project.title.toLowerCase() === this.$route.params.post.toLowerCase());
      if (isFullscreen) {
        this.setActive("");
      } else {
        this.setActive(title);
      }
    },
    setActive(title, firstVisit = false) {
      if (!firstVisit) this.$router.push({ path: `/projects/${title || ""}` });
      this.active = this.$route.params.post
        ? this.projects.findIndex(e => {
            return (
              e.title.toLowerCase() === this.$route.params.post.toLowerCase()
            );
          })
        : -1;
    }
  },
  created() {
    this.setActive(this.$route.params.title, true);
    window.addEventListener("keydown", e => {
      if (this.active !== -1 && e.keyCode === 27) {
        this.setActive('');
      }
    });
  }
};
</script>

<style>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 60px;
  width: 100vw;
  max-width: 100%;
}

.page-background {
  position: absolute;
  background: linear-gradient(165deg, #fefefe 60%, #d3d3d3);
  z-index: -1;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
