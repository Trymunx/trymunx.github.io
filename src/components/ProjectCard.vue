<template>
  <div :class="`project-card ${focused ? 'fullscreen' : ''}`">
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
    <span :class="focused ? 'focused-summary' : 'card-content'">
      <slot name="description"/>
    </span>
    <span v-show="focused" class="writeup">
      <slot name="writeup"/>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    focused: { type: Boolean, default: false }
  }
};
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
  transition: width 250ms, height 250ms;
}

.fullscreen {
  position: absolute;
  width: 80vw;
  max-width: 80vw;
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

.writeup {
  text-align: left;
  padding: 10px 35px 15px;
  line-height: 1.8em;
  white-space: pre-wrap;
}

.focused-summary {
  text-align: left;
  padding: 8px 80px 10px;
  font-style: italic;
  line-height: 1.4em;
  color: #494949;
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

  .fullscreen {
    width: 100%;
    max-width: 100%;
  }
}
</style>
