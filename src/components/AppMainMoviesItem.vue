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
    transformToInt(vote){
        return Math.round(vote / 2);
    }
  },
 
}
</script>

<template>

  <div class="row justify-content-center align-items-center gap-3">
    <li class="col-3 d-flex" v-for="movie in store.mediaMovieList" :key="movie.id">
      <div class="card h-100">
        <!-- titolo film -->
        <h2>{{ movie.title }}</h2>

        <!-- titolo originale film -->
        <h3>{{ movie.original_title }}</h3>

        <!-- lingua originale  -->
        <img class="lang-flag" :src="getFlagImg(movie.original_language)" :alt="movie.original_language">

        <!-- voto medio stelle -->
        <div class="d-flex">
          <font-awesome-icon v-for="star in transformToInt(movie.vote_average)" icon="star" class="star text-warning"/>
        </div>
        <!-- immagine di copertina -->
        <img class="img-fluid" :src="`${movieCoverImg}${movie.poster_path}`" :alt="`${movie.title} cover`">
     </div>
    </li>
  </div>

</template>

<style lang="scss" scoped>
.lang-flag {
  height: 20px;
  width: 30px;
}
</style>