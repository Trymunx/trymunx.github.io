<template>
  <div class="about">
    <div class="contents">
      <about-card>
        <img src="@/assets/Alex-Line.png" class="profile-image">    
        <h2>Alexander Houseago</h2>
        <p>Hobbyist web developer and Linux enthusiast.</p>
        <div class="social-links">
          <a href="https://twitter.com/trymunx" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://github.com/trymunx" target="_blank"><i class="fab fa-github"></i></a>
          <a href="mailto:trymunx@gmail.com"><i class="fas fa-envelope"></i></a>
        </div>
      </about-card>
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
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/forest1.jpg") no-repeat center fixed;
  background-size: cover;
  height: 100vh;
}

.profile-image {
  width: 160px;
  transition: width 0.5s ease-in;
}

.profile-image:hover {
  width: 1000px;
  transition: all 200s cubic-bezier(0.95, 0.05, 0.795, 0.035);
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
</style>
