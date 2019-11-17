<template functional>
  <div>
    <bs-header></bs-header>
    <div class="container">
      <div class="card">
        <markdown-content
          file="content/intro.md"
          class="card-body"
        ></markdown-content>
      </div>

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
  margin-top: 100px;
  margin-bottom: 100px;
}
.card-body p:last-of-type {
  margin-bottom: 0px;
}
</style>
