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
  
    <li class="col-3 d-flex" v-for="series in store.mediaSeriesList" :key="series.id">
      <div class="card h-100 rounded-0">
        <div class="card-body bg-black d-flex flex-column p-0">
          <div class="card-info text-white position-absolute top-0 start-0 end-0 bottom-0 justify-content-start align-items-start flex-column p-3">
              <!-- titolo serie tv -->
              <h4>Titolo: <span class="fs-6">{{ series.name }}</span> </h4>

              <!-- titolo originale serie tv -->
              <h4>Titolo Originale: <span class="fs-6">{{ series.original_name }}</span></h4>

              <!-- lingua originale -->
              <img class="lang-flag mb-2" :src="getFlagImg(series.original_language)" :alt="series.original_language">

              <!-- voto medio stelle -->
              <div class="d-flex">
                <h4>Voto:<font-awesome-icon v-for="star in transformToInt(series.vote_average)" icon="star" class="star text-warning"/></h4>
              </div>

              <!-- Overview -->
              <h4>Overview: <span class="fs-6"> {{ series.overview }}</span></h4>

          </div>
          <!-- immagine di copertina -->
          <div class="card-img">
              <img class="img-fluid" :src="`${seriesCoverImg}${series.poster_path}`" :alt="`${series.name} cover`">
          </div>  

        </div>
    </div>
    </li>
  
</template>

<style lang="scss" scoped>
.card-body {
  overflow: hidden;
  position: relative;
  cursor: pointer;
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