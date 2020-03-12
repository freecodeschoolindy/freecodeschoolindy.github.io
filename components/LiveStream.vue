<template>
  <div v-if="streamer === 'jared'">
    <iframe
      allowfullscreen
      class="iframe"
      scrolling="no"
      src="https://player.twitch.tv/?channel=thejaredwilcurt"
    ></iframe>
  </div>
  <div v-else>
    <iframe
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="iframe"
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
  data: function () {
    return {
      streamer: 'gwen'
    };
  }
};
</script>

<style scoped>
.iframe {
  width: 100%;
  height: calc(100vh - 141px);
  border: 0px;
  margin-bottom: -85px;
}
</style>
