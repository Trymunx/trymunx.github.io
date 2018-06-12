import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Blog from "./views/Blog.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/about"
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/projects/:post?",
      name: "projects",
      component: Projects
    }
  ]
})
