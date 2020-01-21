Vue.config.devtools = true;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: '/',
  routes: [
    {
      path: '*',
      name: '404',
      component:  httpVueLoader("/components/NotFound.vue")
    },
    {
      path: "/",
      name: "home",
      component: httpVueLoader("/components/BasePage.vue"),
      props: () => ({
        file: '/content/about.md'
      })
    },
    {
      path: "/enrollment",
      name: "enrollment",
      component: httpVueLoader("/components/BasePage.vue"),
      props: () => ({
        file: '/content/enrollment.md'
      })
    },
    {
      path: "/volunteer",
      name: "volunteer",
      component: httpVueLoader("/components/BasePage.vue"),
      props: () => ({
        file: '/content/volunteer.md'
      })
    }
  ]
});

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  template: '<app-composition></app-composition>',
  components: {
    'app-composition': httpVueLoader('/components/app-composition.vue')
  },
  router,
  created () {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      this.$router.push(redirect);
    }
  }
});
