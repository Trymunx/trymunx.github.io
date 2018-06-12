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
  box-shadow: 0 4px 8px 0 #0000000A, 0 6px 20px 0 #00000032;
}
.about-card > * {
  padding: 15px 8px;
}
</style>
