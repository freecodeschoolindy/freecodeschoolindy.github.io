<template>
  <i-container>
    <i-row>
      <i-column xs="12" md="6">
        <i-form-group class="_margin-top-1">
          <i-form-label><strong>Streamers:</strong></i-form-label>
          <div>
            <i-button-group>
              <i-button
                v-for="(streamer, key) in streamers"
                :variant="selectedStreamer === key ? 'primary' : 'light'"
                @click="selectedStreamer = key"
                :key="'streamer' + key"
              >
                {{ streamer.name }}
              </i-button>
            </i-button-group>
          </div>
        </i-form-group>

        <div class="_margin-top-2">
          To participate in chat click here (account creation/login required).
        </div>

        <div class="_text-center">
          <i-button
            :href="chatLink"
            class="_margin-top-1"
            outline
            tag="a"
            variant="primary"
          >
            Join chat!
          </i-button>
        </div>
      </i-column>
      <i-column xs="12" md="6">
        <iframe
          :src="iframeSrc"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="iframe"
          scrolling="no"
        ></iframe>
      </i-column>
    </i-row>
  </i-container>
</template>

<script>
module.exports = {
  name: 'live-stream',
  components: {
    'markdown-content': httpVueLoader('/components/markdown-content.vue')
  },
  data: function () {
    return {
      selectedStreamer: 'gwen',
      streamers: {
        gwen: {
          name: 'Gwen Faraday',
          url: 'https://youtu.be/WTHpiPotFHY',
          src: 'https://youtu.be/WTHpiPotFHY'
        },
        jared: {
          name: 'The Jared Wilcurt',
          url: 'https://twitch.tv/TheJaredWilcurt',
          src: 'https://player.twitch.tv/?channel=thejaredwilcurt'
        }
      }
    };
  },
  computed: {
    chatLink: function () {
      let link = this.streamers.gwen.url;
      if (this.streamers.hasOwnProperty(this.selectedStreamer)) {
        link = this.streamers[this.selectedStreamer] && this.streamers[this.selectedStreamer].url || link;
      }
      return link;
    },
    iframeSrc: function () {
      let link = this.streamers.gwen.src;
      if (this.streamers.hasOwnProperty(this.selectedStreamer)) {
        link = this.streamers[this.selectedStreamer] && this.streamers[this.selectedStreamer].src || link;
      }
      return link;
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
