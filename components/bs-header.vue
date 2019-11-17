<template>
  <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div class="container">
      <a href="/#" class="navbar-brand">freeCodeSchool Indy</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="showNav = !showNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        :class="{ 'show': showNav }"
        class="navbar-collapse collapse justify-content-between"
      >
        <ul class="navbar-nav">
          <li
            v-for="(link, linkIndex) in links"
            class="nav-item"
            :key="'navLink' + linkIndex"
          >
            <a
              v-if="link.url"
              v-text="link.name"
              :href="link.url"
              :target="link.external ? '_blank' : '_self'"
              class="nav-link"
              data-scroll
              @click="showNav = false"
            ></a>
            <span v-else class="nav-link">
              {{ link.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'bs-header',
  data: function () {
    return {
      showNav: false,
      links: [
        {
          name: 'Enrollment',
          url: '#enrollment'
        },
        {
          name: 'About',
          url: '#about'
        },
        // {
        //   name: 'Contact',
        //   url: '#contact'
        // },
        {
          name: 'Public Library',
          url: 'https://www.indypl.org/locations/central-library',
          external: true
        }
      ]
    };
  },
  created: function () {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      easing: 'easeOutCubic',
      updateURL: true,
      popstate: true
    });

    setTimeout(function () {
      let hash = window.location.hash;
      if (hash) {
        scroll.animateScroll(document.querySelector(hash));
      }
    }, 350);
  }
};
</script>

<style>

.navbar-brand {
  font-family: 'Roboto Mono', monospace;
}
</style>
