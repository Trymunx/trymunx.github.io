<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <slot/>
  </a>
</template>

<script>
export default {
  // Do not forget this little guy
  name: "SafeAnchor",
  // share common functionality with component mixins
  mixins: [],
  // compose new components
  extends: {},
  // component properties/variables
  props: {
    href: String
  },
  // variables
  data() {
    return {};
  },
  computed: {},
  // when component uses other components
  components: {},
  // methods
  watch: {},
  methods: {},
  // component Lifecycle hooks
  beforeCreate() {},
  mounted() {}
};
</script>

<style scoped>
</style>
