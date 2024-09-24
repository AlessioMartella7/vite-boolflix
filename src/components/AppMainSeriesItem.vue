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
  <div class="row justify-content-center align-items-center">
    <li class="col-3 d-flex" v-for="series in store.mediaSeriesList" :key="series.id">
      <div class="card h-100">
      <!-- titolo serie tv -->
      <h2>{{ series.name }}</h2>

      <!-- titolo originale serie tv -->
      <h3>{{ series.original_name }}</h3>

      <!-- lingua originale -->
      <img class="lang-flag" :src="getFlagImg(series.original_language)" :alt="series.original_language">

      <!-- voto medio stelle -->
       <div class="d-flex">
         <font-awesome-icon v-for="star in transformToInt(series.vote_average)" icon="star" class="star text-warning"/>
       </div>
      <!-- immagine di copertina -->
      <img class="img-fluid" :src="`${seriesCoverImg}${series.poster_path}`" :alt="`${series.name} cover`">
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