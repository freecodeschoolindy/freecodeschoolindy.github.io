<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <span class="_margin-top-2">
          To participate in chat click here (account creation/login required).
        </span>
        <a
          :href="chatLink"
          class="btn btn-lg btn-primary _margin-top-1"
        >
          Join chat!
        </a>
      </div>
      <div class="col-md-6">
        <iframe
          v-if="streamer === 'jared'"
          allowfullscreen
          class="iframe"
          scrolling="no"
          src="https://player.twitch.tv/?channel=thejaredwilcurt"
        ></iframe>
        <iframe
          v-else
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="iframe"
          scrolling="no"
          src="https://www.youtube-nocookie.com/embed/live_stream?channel=UCxA99Yr6P_tZF9_BgtMGAWA"
        ></iframe>
      </div>
    </div>
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
  },
  computed: {
    chatLink: function () {
      let streamers = {
        gwen: 'https://www.youtube.com/channel/UCxA99Yr6P_tZF9_BgtMGAWA',
        jared: 'https://twitch.tv/TheJaredWilcurt'
      };
      return streamers[this.streamer] || streamers.gwen;
    }
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
