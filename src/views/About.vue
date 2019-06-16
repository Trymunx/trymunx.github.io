<template>
  <div class="page-container">
    <div class="about">
      <img src="@/assets/Alex-Line.png" class="profile-picture">
          <h2 class="my-name">Alexander Houseago</h2>
          <div class="profile-divider"></div>
          <div class="about-me-description">
            <p class="about-me-para">I am a hobbyist web developer, mostly working on games
            written in Javascript or Typescript. I have also been working
            on some other non-game related projects, like a
            <a href="https://trymunx.com/metric-clock" target="_blank">metric clock</a> and a
            <a href="https://twodo-app.github.io/twodo-app/#/" target="_blank">simple todo app</a>.</p>
            <p class="about-me-para">I love messing around with configuration and dotfiles
            when I'm supposed to be doing anything more productive, and I have a bit of a soft spot
            for Chrome OS.</p>
          </div>
          <div class="social-links" @mouseenter="cancelTimeout()" @mouseleave="clearLinkDescription()">
            <a href="https://twitter.com/trymunx" target="_blank" @mouseenter="linkHover('twitter')"><i class="fab fa-twitter"></i></a>
            <a href="https://github.com/trymunx" target="_blank" @mouseenter="linkHover('github')"><i class="fab fa-github"></i></a>
            <a href="mailto:trymunx@gmail.com" @mouseenter="linkHover('email')"><i class="fas fa-envelope"></i></a>
            <div class="link-description">{{linkDescription}}</div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkDescription: "",
      linkDescriptionTimeout: null,
    }
  },
  methods: {
    cancelTimeout() {
      clearTimeout(this.linkDescriptionTimeout);
    },
    clearLinkDescription() {
      this.linkDescriptionTimeout = setTimeout(() => this.linkDescription = "", 3000);
    },
    linkHover(linkString) {
      switch (linkString) {
        case "twitter":
          this.linkDescription = "Twitter";
          break;
        case "github":
          this.linkDescription = "GitHub";
          break;
        case "email":
          this.linkDescription = "trymunx@gmail.com";
          break;
        default:
          console.error("hmm what did you hover?");
      }
    }
  },
  name: "about",
};
</script>

<style>
.background-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/forest1.jpg") no-repeat center fixed;
  background-size: cover;
  height: 70%;
  z-index: -2;
}

.page-container {
  display: flex;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  background-color: #eee;
}

.about {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 -2px 8px 0 #0000004d;
}

.profile-picture {
  width: 40%;
  max-width: 200px;
  margin: 45px;
  border-radius: 50%;
  border: 1px #333 solid;
}

.my-name {
  font-size: 1.6em;
}

.profile-divider {
  background-color: #b5b5b5;
  height: 1px;
  width: 75%;
  margin: 10px 0px;
}

.about-me-description {
}

.about-me-para {
  padding: 6px 28px;
  text-align: left;
  line-height: 1.5em;
}

.social-links {
  padding: 20px;
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

.link-description {
  color: #7a7a7a;
  margin: 10px;
  height: 20px;
  width: 150px;
}
</style>
