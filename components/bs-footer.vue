<template>
  <footer class="footer mt-5 py-3 bg-secondary">
    <div class="container">
      <div class="text-dark fix-link-on-secondary-background row">
        <div class="col-md-6 col-12">
          <markdown-content file="content/footer.md"></markdown-content>
        </div>
        <div class="col-md-6 col-12">
          <markdown-content file="content/contact.md"></markdown-content>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
module.exports = {
  name: 'bs-footer',
  components: {
    'markdown-content': httpVueLoader('components/markdown-content.vue')
  }
};
</script>

<style>
.fix-link-on-secondary-background a {
    color: currentColor;
    text-decoration: underline;
}
</style>
