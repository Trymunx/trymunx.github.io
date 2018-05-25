<template>
  <div class="blog-post">
    {{postText}}
  </div>
</template>

<script>
export default {
  props: "postText"
}
</script>

<style>
.blog-post {
  width: min(device-width, 600px);
  box-shadow: 0px 3px 10px -2px grey;
}
</style>
