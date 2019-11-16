Vue.config.devtools = true;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    theme: 'Yeti'
  },
  mutations: {
    setTheme: function (state, theme) {
      state.theme = theme;
    }
  },
  actions: {},
  getters: {}
});

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  template: '<app-composition></app-composition>',
  components: {
    'app-composition': httpVueLoader('components/app-composition.vue')
  },
  store: store
});
