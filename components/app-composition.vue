<template>
  <div id="app">
    <the-navigation class="shrink"></the-navigation>
    <div class="grow">
      <router-view></router-view>
    </div>
    <the-footer class="shrink"></the-footer>
  </div>
</template>

<script>
module.exports = {
  name: 'app-composition',
  components: {
    'the-navigation': httpVueLoader('/components/TheNavigation.vue'),
    'the-footer': httpVueLoader('/components/TheFooter.vue')
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.shrink {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
h1, h2, h3 {
  color: #345578;
  font-family: 'Roboto Mono', monospace;
}
p {
  font-family: 'Lato', sans-serif;
}
</style>
