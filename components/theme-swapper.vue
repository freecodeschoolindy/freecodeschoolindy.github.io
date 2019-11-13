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
      selected: 'Journal',
      styles: [
        'Cerulean',
        'Cosmo',
        'Cyborg',
        'Darkly',
        'Flatly',
        'Journal',
        'Litera',
        'Lumen',
        'Lux',
        'Materia',
        'Minty',
        'Pulse',
        'Sandstone',
        'Simplex',
        'Sketchy',
        'Slate',
        'Solar',
        'Spacelab',
        'Superhero',
        'United',
        'Yeti'
      ]
    };
  }
};
</script>
