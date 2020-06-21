<template>
  <div class="blog-post">
    <h1>
      <slot name="title"></slot>
    </h1>
    <p>
      <slot name="content"></slot>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style>
.blog-post {
  width: min(device-width, 600px);
  box-shadow: 0px 3px 10px -2px grey;
}
</style>
