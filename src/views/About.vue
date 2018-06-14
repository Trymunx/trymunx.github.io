<template>
  <div>
    <div class="link-background"></div>
    <div class="about">
      <div class="background-image">
        <img src="@/assets/Alex-Line.png" class="profile-picture">
        <div class="about-card">
          <img src="@/assets/Alex-Line.png" class="card-profile-picture">
          <h2>Alexander Houseago</h2>
          <p>Hobbyist web developer and Linux enthusiast.</p>
          <div class="social-links">
            <a href="https://twitter.com/trymunx" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://github.com/trymunx" target="_blank"><i class="fab fa-github"></i></a>
            <a href="mailto:trymunx@gmail.com"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
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
export default {
  name: "about"
};
</script>

<style>
.background-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/snow.jpg") no-repeat center fixed;
  background-size: cover;
  height: 65vh;
  z-index: -2;
}
.about {
  position: relative;
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
  z-index: 1;
}

.about-me > * {
  padding: 8px 2px;
}

.about-me > p {
  padding: 8px 18px;
}

.profile-picture {
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
  position: relative;
  width: 100%;
  height: 62px;
  background: #fff;
  z-index: 5;
  box-shadow: 0 4px 18px 0 #0000004d;
}

.about-card {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 #0000000a, 0 6px 20px 0 #00000032;
  padding: 20px;
}

.about-card > h1,
p {
  padding: 20px;
}

.card-profile-picture {
  width: 240px;
  margin: 30px;
}

@media screen and (orientation: landscape) {
  .background-image {
    width: 60vw;
    height: calc(100vh - 62px);
    max-height: 100%;
  }
  .profile-picture {
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

@media screen and (min-width: 750px) and (min-height: 750px) {
  .about-card {
    display: flex;
  }
  .background-image {
    width: 100vw;
    max-width: 100%;
    height: calc(100vh - 62px);
  }
  .profile-picture,
  .about-me {
    display: none;
  }
}
</style>
