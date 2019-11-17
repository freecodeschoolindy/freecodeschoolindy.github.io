<template>
  <div>
    <link
      :href="'https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/' + selected.toLowerCase() + '/bootstrap.min.css'"
      rel="stylesheet"
    />
    <div class="form-group">
      <label>
        Theme:&nbsp;
        <select
          v-model="selected"
          class="custom-select"
        >
          <option
            v-for="(style, styleIndex) in styles"
            v-text="style"
            :key="'style' + styleIndex"
          ></option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'theme-swapper',
  data: function () {
    return {
      selected: 'Yeti',
      styles: [
        'Cerulean',
        // 'Cosmo',
        'Cyborg',
        'Darkly',
        'Flatly',
        // 'Journal',
        'Litera',
        'Lumen',
        // 'Lux',
        // 'Materia',
        'Minty',
        'Pulse',
        'Sandstone',
        'Simplex',
        // 'Sketchy',
        'Slate',
        // 'Solar',
        'Spacelab',
        'Superhero',
        'United',
        'Yeti'
      ]
    };
  },
  computed: {
    textClassOnSecondaryBackground: function () {
      const themes = {
        Cerulean: '',
        Cosmo: 'text-light',
        Cyborg: 'text-dark',
        Darkly: '',
        Flatly: '',
        Journal: '',
        Litera: '',
        Lumen: '',
        Lux: '',
        Materia: '',
        Minty: 'text-dark',
        Pulse: '',
        Sandstone: '',
        Simplex: '',
        Sketchy: 'text-light',
        Slate: 'text-light',
        Solar: 'text-dark',
        Spacelab: 'text-dark',
        Superhero: '',
        United: '',
        Yeti: ''
      };

      return themes[this.selected];
    },
    setLinksToCurrentColorOnSecondaryBackground: function () {
      const themesThatNeedFixed = [
        'Flatly',
        'Journal',
        'Litera',
        'Minty',
        'Sketchy',
        'Solar',
        'Spacelab',
        'United'
      ];

      return themesThatNeedFixed.includes(this.selected);
    }
  },
  watch: {
    selected: function () {
      this.$store.commit('setTheme', this.selected);
      this.$store.commit('setSecondaryColor', this.textClassOnSecondaryBackground);
      if (this.setLinksToCurrentColorOnSecondaryBackground) {
        this.$store.commit('setFixLinksOnSecondaryBackground', 'fix-link-on-secondary-background');
      } else {
        this.$store.commit('setFixLinksOnSecondaryBackground', '');
      }
    }
  }
};
</script>

<style>
.fix-link-on-secondary-background a {
    color: currentColor;
    text-decoration: underline;
}
</style>
