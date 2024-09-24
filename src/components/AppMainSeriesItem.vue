<script>

import {store} from '../store.js'

export default {
  data() {
    return {
      store,
    }
  },
  props:{
      seriesCoverImg: {
        type : String,
        required : true,
      }
  },
  methods:{
    getFlagImg(iso){
      const countryCode = store.languageToCountry[iso];
      if (countryCode) {
        return `https://flagcdn.com/24x18/${countryCode}.png`;
      }
      //in caso di mancata corrispondenza
      return 'https://flagcdn.com/24x18/eu.png';
    },
    transformToInt(vote){
        return Math.round(vote / 2);
    }
  }
}
</script>

<template>

<ul>
  <li v-for="series in store.mediaSeriesList" :key="series.id">
    <!-- titolo serie tv -->
    <h2>{{ series.name }}</h2>

    <!-- titolo originale serie tv -->
    <h3>{{ series.original_name }}</h3>

    <!-- lingua originale -->
    <img :src="getFlagImg(series.original_language)" :alt="series.original_language">

    <!-- voto medio stelle -->
    <font-awesome-icon v-for="star in transformToInt(series.vote_average)" icon="star" class="star text-warning"/>

    <!-- immagine di copertina -->
    <img :src="`${seriesCoverImg}${series.poster_path}`" :alt="`${series.name} cover`">
  </li>
</ul>
</template>

<style lang="scss" scoped>
</style>