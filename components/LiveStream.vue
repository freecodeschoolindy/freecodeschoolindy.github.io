<template>
  <div v-if="streamer === 'jared'">

  </div>
  <div v-else>
    <iframe
      src="https://www.youtube-nocookie.com/embed/BHAe8Nfef4Q"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
module.exports = {
  name: 'live-stream',
  components: {
    'markdown-content': httpVueLoader('/components/markdown-content.vue')
  },
  props: {
    streamer: {
      type: String,
      required: false,
      default: 'gwen',
      validator: function (value) {
        return [
          'gwen',
          'jared'
        ].includes(value);
      }
    }
  }
};
</script>

<style scoped>
</style>
