<template>
<div>
  <i-layout-footer class="_text-center _background-dark _margin-top-5">
    <i-nav size="sm" class="_justify-content-center">
      <i-nav-item class="_text-light" :to="{ name: 'home' }">Home</i-nav-item>
      <i-nav-item class="_text-light" :to="{ name: 'enrollment' }">Enrollment</i-nav-item>
      <i-nav-item class="_text-light" :to="{ name: 'volunteer' }">Volunteer</i-nav-item>
    </i-nav>	
    <p class="_font-size-sm _margin-top-0 _margin-bottom-0">Website and images &copy;2019<p>
  </i-layout-footer>
</div>
</template>

<script>
module.exports = {
	name: 'TheFooter',
  components: {
    'markdown-content': httpVueLoader('/components/markdown-content.vue')
  }
}
</script>

<style scoped>
.image {
  max-height: 80px;
}
</style>
