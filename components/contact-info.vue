<template>
  <div>
    <h1 class="mt-5 mb-5">Contact</h1>
    <div class="row">
      <div class="col-12">
        <markdown-content file="content/contact.md"></markdown-content>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'contact-info',
  components: {
    'markdown-content': httpVueLoader('components/markdown-content.vue')
  }
};
</script>
