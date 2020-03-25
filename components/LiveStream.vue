<template>
  <i-container>
    <i-row>
      <i-column xs="12" md="12">
        <h2>Remote Streaming Schedule</h2>
      </i-column>
    </i-row>
    <i-row>
      <i-column
        v-for="event in schedules"
        class="_margin-bottom-1"
        xs="12"
        md="4"
        :key="event.date + event.topic"
      >
        <i-card>
          <img
            v-if="event.img"
            :src="event.img"
            :alt="event.title"
            slot="image"
          />
          <h4 class="title">{{ event.title }}</h4>
          <p class="subtitle">On {{ event.date }}</p>
          <p><strong>Presenter:</strong> {{ event.presenter }}</p>
          <p>{{ event.description }}</p>
          <a :href="event.url" class="link">{{ event.platform }}</a>
        </i-card>
      </i-column>
    </i-row>
  </i-container>
</template>

<script>
module.exports = {
  name: 'live-stream',
  data: function () {
    return {
      schedules: [
        {
          date: '3/16/20',
          title: 'Regex and OOP',
          description: 'Regular Expressions and the programming paradigm Object Oriented Programming (OOP).',
          presenter: 'Gwen Faraday',
          url: 'https://youtu.be/WTHpiPotFHY',
          platform: 'YouTube'
        },
        {
          date: '3/18/20',
          title: 'Git and GitHub',
          description: 'Version control using git. Push, pull, commit, stage, merge, fork, branch, and more!',
          presenter: 'Morgan Shepard',
          url: 'https://discord.gg/uAe8vmk',
          platform: 'Discord'
        },
        {
          date: '3/23/20',
          title: 'jQuery',
          description: 'Building stuff fast, with the world\'s most downloaded library.',
          presenter: 'The Jared Wilcurt',
          url: 'https://discord.gg/uAe8vmk',
          platform: 'Discord'
        },
        {
          date: '3/25/20',
          title: 'Functional Programming',
          description: 'An alternative programming paradign',
          presenter: 'Gwen Faraday',
          url: 'https://discord.gg/uAe8vmk',
          platform: 'Discord'
        }
      ]
    };
  }
};
</script>
