<template>
  <div class="project-card">
    <slot name="card-image" class="card-image"></slot>
    <slot name="project-title" class="project-title"></slot>
    <slot class="card-content"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style>
.project-card {
  display: flex;
  min-width: 50%;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 #0000000A, 0 6px 20px 0 #00000032;
}
.card-image {
  max-width: 100%;
  height: auto;
}

.project-title {
  font-size: 1.2em;
  text-align: center;
}
.card-content {}
</style>
