<template>
  <i-container class="base-page">
    <markdown-content :file="file"></markdown-content>
  </i-container>
</template>

<script>
module.exports = {
  name: 'about-us',
  components: {
    'markdown-content': httpVueLoader('/components/markdown-content.vue')
  },
  props: {
    file: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.base-page {
  min-height: 580px;
}
</style>
