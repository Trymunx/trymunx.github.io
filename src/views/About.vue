<template>
  <div>
    <div class="about">
      <div class="link-background"></div>
      <div class="contents">
        <img src="@/assets/Alex-Line.png" class="profile-image">
      </div>
      <!-- <div class="about-me">
        <h2>Alexander Houseago</h2>
        <p>Hobbyist web developer and Linux enthusiast.</p>
        <div class="social-links">
          <a href="https://twitter.com/trymunx" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://github.com/trymunx" target="_blank"><i class="fab fa-github"></i></a>
          <a href="mailto:trymunx@gmail.com"><i class="fas fa-envelope"></i></a>
        </div>
      </div> -->
        <!-- <about-card>
          <img src="@/assets/Alex-Line.png" class="profile-image">    
          <h2>Alexander Houseago</h2>
          <p>Hobbyist web developer and Linux enthusiast.</p>
          <div class="social-links">
            <a href="https://twitter.com/trymunx" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://github.com/trymunx" target="_blank"><i class="fab fa-github"></i></a>
            <a href="mailto:trymunx@gmail.com"><i class="fas fa-envelope"></i></a>
          </div>
        </about-card> -->
      <!-- </div> -->
    </div>
    <div class="about-me">
      <h2>Alexander Houseago</h2>
      <p>Hobbyist web developer and Linux enthusiast.</p>
      <div class="social-links">
        <a href="https://twitter.com/trymunx" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://github.com/trymunx" target="_blank"><i class="fab fa-github"></i></a>
        <a href="mailto:trymunx@gmail.com"><i class="fas fa-envelope"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import AboutCard from "@/components/AboutCard.vue";

export default {
  name: "about",
  components: {
    AboutCard
  }
};
</script>

<style>
.contents {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/snow.jpg") no-repeat center fixed;
  background-size: cover;
  height: 65vh;
}
.about {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.about-me {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30%;
  width: 100vw;
  max-width: 100%;
  background: #fff;
  box-shadow: 0 -4px 18px 0 #0000004d;
}

.about-me > * {
  padding: 8px 2px;
}

.about-me > p {
  padding: 8px 18px;
}

.profile-image {
  width: 50%;
  max-width: 400px;
}

.social-links {
  margin-top: 10px;
}

.social-links > a {
  font-size: 2em;
  padding: 2px 10px;
  color: #2a3a2d;
  transition: color 0.35s ease;
}

.social-links > a:hover {
  color: #4c7553;
}

.link-background {
  width: 100%;
  height: 62px;
  background: #fff;
  z-index: 1;
  box-shadow: 0 4px 18px 0 #0000004d;
}

@media screen and (orientation: landscape) {
  .contents {
    width: 60vw;
    height: calc(100vh - 62px);
    max-height: 100%;
  }
  .profile-image {
    height: 50%;
    max-height: 400px;
    width: auto;
  }
  .about-me {
    right: 0;
    top: 60px;
    width: 40%;
    height: calc(100vh - 62px);
    box-shadow: none;
  }
}
</style>
