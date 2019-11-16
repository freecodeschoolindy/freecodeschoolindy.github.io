<template>
  <div>
    <bs-header></bs-header>
    <div class="container">
      <markdown-content file="content/intro.md"></markdown-content>

      <hr id="enrollment" />
      <enrollment-info></enrollment-info>

      <hr id="about" />
      <about-us></about-us>
    </div>
    <bs-footer id="contact"></bs-footer>
  </div>
</template>

<script>
module.exports = {
  name: 'app-composition',
  components: {
    'about-us': httpVueLoader('components/about-us.vue'),
    'bs-footer': httpVueLoader('components/bs-footer.vue'),
    'bs-header': httpVueLoader('components/bs-header.vue'),
    'enrollment-info': httpVueLoader('components/enrollment-info.vue'),
    'markdown-content': httpVueLoader('components/markdown-content.vue')
  }
};
</script>

<style scoped>
hr {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
