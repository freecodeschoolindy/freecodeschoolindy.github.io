<template>
  <div>
    <bs-header></bs-header>
    <div class="container">

      <hr id="enrollment" />
      <enrollment-info></enrollment-info>

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
    'enrollment-info': httpVueLoader('components/enrollment-info.vue'),
    'about-us': httpVueLoader('components/about-us.vue'),
    'bs-header': httpVueLoader('components/bs-header.vue'),
    'contact-info': httpVueLoader('components/contact-info.vue')
  }
};
</script>

<style scoped>
hr {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
