<template>
  <div class="about">
    <img src="@/assets/forest.jpg" id="forest-background">
    <div class="contents">
      <About-Card/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutCard from "@/components/AboutCard.vue"

export default {
  name: "about",
  components: {
    AboutCard
  }
}
</script>

<style>
.about {
  // background-image: url("/forest.jpg");
  // height: 100vh;
  height: 100%;
}
.contents {
  display: flex;
  justify-content: CENTER;
  margin-top: 120px;
}

@media (min-width: 900px) {
  #forest-background {
    width: 100%;
  }
}

#forest-background {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  overflow-x: hidden;
  z-index: -1;
}
</style>
