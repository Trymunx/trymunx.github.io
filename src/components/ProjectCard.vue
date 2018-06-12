<template>
  <div class="project-card">
    <slot name="card-image"/>
    <div class="card-title">
      <div class="project-title">
        <slot name="project-title"/>
      </div>
      <span class="link-button">
        <slot name="link-button"/>
      </span>
      <span class="source-button">
        <slot name="source-button" class="source-button"/>
      </span>
    </div>
    <slot class="card-content"/>
  </div>
</template>

<script>
export default {};
</script>

<style>
.project-card {
  display: flex;
  width: 45%;
  max-width: 600px;
  margin: 30px;
  padding-bottom: 5px;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 8px 0 #0000000a, 0 6px 20px 0 #00000032;
}

.card-image {
  max-width: 100%;
  height: auto;
  cursor: pointer;
}

.card-title {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.project-title {
  font-size: 1.2em;
  padding: 14px 20px;
  margin-right: auto;
}

.link-button > a {
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

.link-button > a:hover {
  background: #4f935b;
  box-shadow: 0 4px 8px 0 #0000001a, 0 6px 20px 0 #00000052;
}

.source-button > a {
  font-size: 2em;
  padding: 2px 10px;
  margin: 10px 18px;
  color: #2a3a2d;
  transition: color 0.35s ease;
}

.source-button > a:hover {
  color: #4c7553;
}

.card-content {
  text-align: left;
  padding: 2px 14px 8px;
}

.page-container {
  background: #fafafa;
  min-height: 100vh;
}

@media only screen and (max-width: 900px) {
  .project-card {
    width: 95%;
    max-width: 600px;
  }
}
</style>
