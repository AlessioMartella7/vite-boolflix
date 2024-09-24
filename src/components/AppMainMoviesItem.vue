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

  
    <li class="col-3 d-flex" v-for="movie in store.mediaMovieList" :key="movie.id">
      <div class="card h-100 rounded-0" >
        <div class="card-body bg-black d-flex flex-column p-0 ">
          <div class="card-info position-absolute top-0 start-0 end-0 bottom-0 justify-content-center align-items-center flex-column">
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
          </div>
              <!-- immagine di copertina -->
          <div class="card-img">
             <img class="img-fluid" :src="`${movieCoverImg}${movie.poster_path}`" :alt="`${movie.title} cover`">
          </div>
      </div>
     </div>
    </li>


</template>

<style lang="scss" scoped>
.card-body {
  overflow: hidden;
  position: relative;
}
.lang-flag {
  height: 20px;
  width: 30px;
}
.card-info {
  display: none;
}
.card-body:hover .card-img {
  opacity: 0;
} 
.card-body:hover .card-info {
  display: flex;
  }

</style>