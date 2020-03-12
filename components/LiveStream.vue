<template>
  <div v-if="streamer === 'jared'">
    <iframe
      allowfullscreen
      scrolling="no"
      src="https://player.twitch.tv/?channel=thejaredwilcurt"
    ></iframe>
  </div>
  <div v-else>
    <iframe
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      scrolling="no"
      src="https://www.youtube-nocookie.com/embed/live_stream?channel=UCxA99Yr6P_tZF9_BgtMGAWA"
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
iframe {
  width: 100%;
  height: calc(100vh - 141px);
  border: 0px;
  margin-bottom: -85px;
}
</style>
