<template>
  <div>
    <network-error
      v-if="networkError"
      @dismissed="networkError = false"
    ></network-error>
    <loading-spinner v-if="loading"></loading-spinner>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="content"></div>
  </div>
</template>

<script>
module.exports = {
  name: 'markdown-content',
  components: {
    'network-error': httpVueLoader('components/network-error.vue'),
    'loading-spinner': httpVueLoader('components/loading-spinner.vue')
  },
  props: {
    file: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      loading: true,
      networkError: false,
      content: ''
    };
  },
  methods: {
    getMarkdown: function () {
      this.loading = true;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.file, true);
      xhr.overrideMimeType('text/html');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            this.networkError = false;
            this.content = marked(xhr.responseText);
          } else {
            this.networkError = true;
          }
          this.loading = false;
        }
      }.bind(this);
      xhr.send();
    }
  },
  created: function () {
    this.getMarkdown();
  }
};
</script>
