<template>
  <div class="blog-container">
    <div class="blog-sidebar">
      <div class="blog-link">
        Blog post one
      </div>
      <div class="blog-link">
        Blog post two
      </div>
      <div class="blog-link">
        Blog post three
      </div>
    </div>
    <div class="blog-main">
      Blog post
      <blog-post>
        <template v-slot:title><h1>The blog title</h1></template>
        <template v-slot:content><p>The blog content</p></template>
      </blog-post>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";

export default {
  name: "blog",
  components: {BlogPost},
};
</script>

<style>
.blog-container {
  display: grid;
  grid-template-areas: "sidebar main";
  grid-template-columns: 400px 1fr; 
  min-height: 100%;
}

.blog-main {
  grid-area: "main";
  padding: 20px;
}

.blog-sidebar {
  background-color: #fafafa;
  grid-area: "sidebar"
}

.blog-link {
  cursor: pointer;
  padding: 20px;
  text-align: left;
}

.blog-link:hover {
  background-color: #dde2dd;
}
</style>
