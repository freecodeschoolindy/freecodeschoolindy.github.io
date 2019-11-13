<template>
  <div>
    <bs-header></bs-header>
    <div class="container">
      <network-error
        v-if="networkError"
        @dismissed="networkError = false"
      ></network-error>
      <loading-spinner v-if="loading"></loading-spinner>

      <hr id="about" />
      <about-us></about-us>

      <hr id="contact" />
      <contact-info></contact-info>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'app-composition',
  components: {
    'network-error': httpVueLoader('components/network-error.vue'),
    'loading-spinner': httpVueLoader('components/loading-spinner.vue'),
    'about-us': httpVueLoader('components/about-us.vue'),
    'bs-header': httpVueLoader('components/bs-header.vue'),
    'contact-info': httpVueLoader('components/contact-info.vue')
  },
  data: function () {
    return {
      loading: false,
      networkError: false,
      allFiles: []
    };
  }
};
</script>

<style scoped>
hr {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
