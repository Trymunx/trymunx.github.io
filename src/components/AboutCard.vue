<template>
  <div class="about-card">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-card {
  padding: 50px 45px 30px;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 3px 10px -2px grey;
}
.about-card > * {
  padding: 15px 8px;
}
</style>
