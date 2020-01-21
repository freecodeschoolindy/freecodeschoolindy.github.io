<template>
  <i-navbar variant="dark">
    <i-navbar-brand :to="{ name: 'home' }" class="navbar-brand">freeCodeSchool Indy</i-navbar-brand>
    <i-navbar-items>
      <i-nav>
        <i-nav-item :to="{ name: 'enrollment' }">Enrollment</i-nav-item>
        <i-nav-item :to="{ name: 'volunteer' }">Volunteer</i-nav-item>
      </i-nav>
    </i-navbar-items>
  </i-navbar>
</template>

<script>
module.exports = {
  name: 'NavTop'
};
</script>
<style scoped>
.navbar-brand {
  font-family: 'Roboto Mono', monospace;
}
</style>