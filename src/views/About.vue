<template>
  <div class="page-container">
    <div class="about">
      <img src="@/assets/Alex-Line.png" class="profile-picture">
      <h2 class="my-name">Alexander Houseago</h2>
      <div class="profile-divider"></div>
      <div class="about-me-description">
        <p class="about-me-para">
          I am a hobbyist web developer, mostly working on games
          written in Javascript or Typescript. I have also been working
          on some other non-game related projects, like a
          <a
            href="https://trymunx.com/metric-clock"
            target="_blank"
          >metric clock</a> and a
          <a href="https://twodo-app.github.io/twodo-app/#/" target="_blank">simple todo app</a>.
        </p>
        <p class="about-me-para">
          I love messing around with configuration and dotfiles
          when I'm supposed to be doing anything more productive, and I have a bit of a soft spot
          for Chrome OS.
        </p>
      </div>
      <div class="social-links" @mouseenter="cancelTimeout()" @mouseleave="clearLinkDescription()">
        <a href="https://twitter.com/trymunx" target="_blank" @mouseenter="linkHover('twitter')">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/trymunx" target="_blank" @mouseenter="linkHover('github')">
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:trymunx@gmail.com" @mouseenter="linkHover('email')">
          <i class="fas fa-envelope"></i>
        </a>
        <div class="link-description" ref="linkDescription">{{linkDescription}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkDescription: "",
      linkDescriptionTimeout: null
    };
  },
  methods: {
    cancelTimeout() {
      clearTimeout(this.linkDescriptionTimeout);
    },
    clearLinkDescription() {
      this.linkDescriptionTimeout = setTimeout(() => {
        this.$refs.linkDescription.classList.add("fadeOut");
      }, 2000);
    },
    linkHover(linkString) {
      this.$refs.linkDescription.classList.remove("fadeOut");
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
  name: "about"
};
</script>

<style>
.fadeOut {
  opacity: 0;
  transition: opacity 1s;
}

@media only screen and (min-width: 500px) {
  .page-container {
    align-items: center;
  }

  .about {
    border-radius: 5px;
    padding: 0 30px;
  }
}
</style>
