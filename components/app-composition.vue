<template functional>
  <div>
    <bs-header></bs-header>
    <div class="container">
      <markdown-content
        file="content/intro.md"
      ></markdown-content>

      <hr id="enrollment" />
      <markdown-content file="content/enrollment.md"></markdown-content>

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
    'bs-header': httpVueLoader('components/bs-header.vue'),
    'markdown-content': httpVueLoader('components/markdown-content.vue'),
    'about-us': httpVueLoader('components/about-us.vue'),
    'bs-footer': httpVueLoader('components/bs-footer.vue')
  }
};
</script>

<style scoped>
hr {
  margin-top: 30px;
  margin-bottom: 60px;
}
h1, h2, h3 {
  color: #345578;
  font-family: 'Roboto Mono', monospace;
}
p {
  font-family: 'Lato', sans-serif;
}
</style>
