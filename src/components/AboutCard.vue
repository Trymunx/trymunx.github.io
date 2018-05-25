<template>
  <div class="about-card">
    <img src="@/assets/Alex-Line.png" width="160px">    
    <h2>Alexander Houseago</h2>
    <p>TODO: replace</p>
    <!-- <p>Hobbyist web developer and Linux enthusiast.</p> -->
    <a href="https://twitter.com/trymunx" target="_blank">Twitter</a>
    <a href="mailto:trymunx@gmail.com">trymunx@gmail.com</a>
  </div>
</template>

<script>
export default {
  name: 'About-Card',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-card {
  width: 420px;
  // height: 440px;
  padding: 50px;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 3px 10px -2px grey;
}
</style>
