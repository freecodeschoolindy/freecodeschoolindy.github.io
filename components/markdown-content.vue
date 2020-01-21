<template>
  <div>
    <not-found v-if="notFound"></not-found>
    <div v-else>
      <network-error
        v-if="networkError"
        @dismissed="networkError = false"
      ></network-error>
      <loading-spinner v-if="loading"></loading-spinner>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'markdown-content',
  components: {
    'network-error': httpVueLoader('/components/network-error.vue'),
    'not-found': httpVueLoader('/components/NotFound.vue'),
    'loading-spinner': httpVueLoader('/components/loading-spinner.vue')
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
      notFound: false,
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
            if( xhr.responseText.includes('<!DOCTYPE html>')) {
              this.notFound = true;
            } else {
              this.content = marked(xhr.responseText);
            }
            this.networkError = false;
          } else {
            this.networkError = true;
            this.notFound = false;
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
