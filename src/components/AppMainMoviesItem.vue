<script>

import {store} from '../store.js'

export default {
  data() {
    return {
      store,

    }
  },
  props:{
      movieCoverImg: {
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
  },
 
}
</script>

<template>

<ul>
  <li v-for="movie in store.mediaMovieList" :key="movie.id">

    <!-- titolo film -->
    <h2>{{ movie.title }}</h2>

    <!-- titolo originale film -->
    <h3>{{ movie.original_title }}</h3>

    <!-- lingua originale  -->
    <img :src="getFlagImg(movie.original_language)" :alt="movie.original_language">

    <!-- voto medio -->
    <p>{{ movie.vote_average }}</p>

    <!-- immagine di copertina -->
    <img :src="`${movieCoverImg}${movie.poster_path}`" :alt="`${movie.title} cover`">
  </li>
</ul>
</template>

<style lang="scss" scoped>
</style>