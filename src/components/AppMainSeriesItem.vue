<script>

import {store} from '../store.js'

export default {
  data() {
    return {
      store,
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

  <!-- voto medio -->
  <p>{{ series.vote_average }}</p>

  <!-- immagine di copertina -->
   
</li>
</ul>
</template>

<style lang="scss" scoped>
</style>