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
    </div>
  </div>
</template>

<script>
export default {
  name: "blog"
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
